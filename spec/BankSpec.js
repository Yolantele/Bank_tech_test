// Account, Renderer and Bank object specs:

describe ('Account', function(){
  var account;
  var account2;

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
      account2.transaction('deposit', 500, '14/01/2012');
      accountLog = [{ date: '14/01/2012', credit: 500, debit: 0, balance: 1500 }];
      expect(account2._log).toEqual(accountLog);
    });
    it("logs current state data when 'withdraw'", function(){
      account2.transaction('withdraw', 500, '14/01/2012');
      accountLog = [{ date: '14/01/2012', credit:0, debit: 500, balance: 500 }];
      expect(account2._log).toEqual(accountLog);
    });
  });
});



// _____  RENDERER SPEC ______


describe ('Renderer', function(){
  var renderer;

  beforeEach(function(){
    renderer = new Renderer();
  });

  describe('#initialize', function(){
    it('stores empty list of log lines', function(){
      expect(renderer._logLines).toEqual([]);
    });
  });

  describe('#convertData', function(){
    it('converts hash data structure to log lines', function (){
      var logData = [ { date: '14/01/2012', credit: 500, debit: 0, balance: 500 } ];
      renderer.convertData(logData);
      logged = '14/01/2012 || 500 || n/a || 500\n';
      expect(renderer._logLines).toEqual([logged]);
    });
  });
});


// _____  BANK SPEC ______


describe ('Bank', function(){
  var bank;
  var mockAccount;


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
      bank.openAccount();
      bank.openAccount();
      expect(bank._accounts.length).toEqual(2);
    });
  });
});
