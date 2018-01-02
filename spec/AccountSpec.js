describe ('Account', function(){
  var account;

  beforeEach(function(){
    account = new Account();
  });
  describe('#initialize', function(){
    it('new account has default balance of 0', function (){
      expect(account.balance).toEqual(0);
    });
    it('can be set to a new balance upon instantiation', function(){
      account1 = new Account(40);
      expect(account1.balance).toEqual(40);
    });
  });

  it('resets transaction status', function(){
    account.deposit(10);
    account.resetStatus();
    resetState = { date: 0, credit: 0, debit: 0, balance: 0 };
    expect(account.currentStatus).toEqual(resetState);
  });

  describe('#account operation', function(){
    it('adds money upon deposit operation', function(){
      account.deposit(10);
      expect(account.balance).toEqual(10);
    });
    it('logs balance, debit and time of deposit', function(){
      account2 = new Account(1000);
      account2.deposit(500);
      var accountLog = [{ date: '02/01/2018', credit: 500, debit: 0, balance: 1500 }];
      expect(account2.log).toEqual(accountLog);
    });
    it('deducts money upon deposit operation', function(){
      account1 = new Account (20);
      account1.withdraw(10);
      expect(account1.balance).toEqual(10);
    });

    it('logs balance, debit and time of withdrawal', function(){
      account2 = new Account(1000);
      account2.withdraw(500);
      accountLog = [{ date: '02/01/2018', credit:0, debit: 500, balance: 500 }];
      expect(account2.log).toEqual(accountLog);
    });
  });
});
