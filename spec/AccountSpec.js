describe ('Account', function(){
  var account;
  var account2;
  var CURRENT_DATE = '03/01/2018';

  beforeEach(function(){
    account = new Account();
    account2 = new Account(1000);

  });

  describe('#initialize', function(){
    it('new account has default balance of 0', function (){
      expect(account._balance).toEqual(0);
    });
    it('can be set to a new balance upon instantiation', function(){
      expect(account2._balance).toEqual(1000);
    });
    it('resets transaction status', function(){
      account.deposit(10);
      account.resetStatus();
      resetState = { name: '', date: 0, credit: 0, debit: 0, balance: 0 };
      expect(account._currentStatus).toEqual(resetState);
    });
  });

  describe('#deposit', function(){
    it('adds to balance', function(){
      account.deposit(10);
      expect(account._balance).toEqual(10);
    });
    it('snapshots current state data to log', function(){
      account2.deposit(500);
      accountLog = [{ name: '', date: CURRENT_DATE, credit: 500, debit: 0, balance: 1500 }];
      expect(account2._log).toEqual(accountLog);
    });
  });

  describe('#withdraw', function(){
    it('deducts from balance', function(){
      account2.withdraw(500);
      expect(account2._balance).toEqual(500);
    });
    it('snapshots current state data to log', function(){
      account2.withdraw(500);
      accountLog = [{ name: '', date: CURRENT_DATE, credit:0, debit: 500, balance: 500 }];
      expect(account2._log).toEqual(accountLog);
    });
  });
  // describe('#transaction', function(){
  //   it('increases funds and updates log when deposit', function(){
  //     account.transaction('deposit', 100);
  //     expect(account._balance).toEqual(100);
  //     ecpect(account._log).toEqual({ date: CURRENT_DATE, credit: 100, debit: 0, balance:100 });
  //   });
  // });
});



// _____  BANK SPEC ______


describe ('Bank', function(){
  var bank;
  var bankAccount;

  var CURRENT_DATE = '03/01/2018';

  beforeEach(function(){
     bank = new Bank();
     bankAccount = new Account();

  });

  describe('#initialize', function(){
    it('has an empty list of accounts', function (){
      expect(bank._accounts).toEqual( [] );
    });
  });

  describe('#operation', function(){
    it("adds new account when 'create account' is chosen", function(){
      bank.operation('Add Account', bankAccount);
      expect(bank._accounts.length).toEqual(1);
    });
  });
});
