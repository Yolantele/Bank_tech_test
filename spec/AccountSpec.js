
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
      resetState = { date: 0, credit: 0, debit: 0 };
      expect(account._currentStatus).toEqual(resetState);
    });
  });

  describe('#deposit', function(){
    it('adds to balance', function(){
      account.deposit(10);
      expect(account._balance).toEqual(10);
    });
  });

  describe('#withdraw', function(){
    it('deducts from balance', function(){
      account2.withdraw(500);
      expect(account2._balance).toEqual(500);
    });
    it('prevents debit if insufficient funds', function(){
      expect( function(){ account.withdraw(1100); }).toThrow('Insuficcient Balance Allowance');
    });
  });
  describe('#transaction', function(){
    it("logs current state data when 'deposit'", function(){
      account2.transaction('deposit', 500);
      accountLog = [{ date: CURRENT_DATE, credit: 500, debit: 0, balance: 1500 }];
      expect(account2._log).toEqual(accountLog);
    });
    it("logs current state data when 'withdraw'", function(){
      account2.transaction('withdraw', 500);
      accountLog = [{ date: CURRENT_DATE, credit:0, debit: 500, balance: 500 }];
      expect(account2._log).toEqual(accountLog);
    });
  });
});



// _____  BANK SPEC ______


describe ('Bank', function(){
  var bank;
  var mockAccount;

  var CURRENT_DATE = '03/01/2018';

  beforeEach(function(){
     bank = new Bank();
     function MockAccount(){}
     mockAccount = new MockAccount();

  });

  describe('#initialize', function(){
    it('has an empty list of accounts', function (){
      expect(bank._accounts).toEqual( [] );
    });
  });

  describe('#openAccount', function(){
    it('stores a new created account with a unique name', function(){
      bank.openAccount('mockAccount');
      bank.openAccount('mockAccount2');
      expect(bank._accounts).toEqual([ ['account1', 'mockAccount'], ['account2', 'mockAccount2'] ]);
    });
  });

  describe('#operation', function(){
    // it("adds new account when 'create account' is chosen", function(){
    //   bank.operation('Add Account', bankAccount);
    //   expect(bank._accounts.length).toEqual(1);
    // });
  });
});

// ______ TEMPLATES _____


  // describe('', function(){
  //   it('', function(){
  //
  //   });
  // });
