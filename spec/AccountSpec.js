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
  describe('#account operation', function(){
    it('adds money upon deposit operation', function(){
      account.deposit(10);
      expect(account.balance).toEqual(10);
    });
    it('captures balance and time of deposit as history', function(){
      account2 = new Account(1000);
      account2.deposit(500);
      var accountLog = [{ date: '02/01/2018', credit: 500, balance: 1500 }];
      expect(account2.log).toEqual(accountLog);
    });
  });
});