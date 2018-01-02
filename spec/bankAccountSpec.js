describe ('bankAccount', function(){
  var account;

  beforeEach(function(){
    account = new BankAccount();
  });
  describe('#initialize', function(){
    it('new account has default balance of 0', function (){
      expect(account.balance).toEqual(0);
    });
    it('can be set to a new balance upon instantiation', function(){
      account1 = new BankAccount(40);
      expect(account1.balance).toEqual(40);
    });
  });
  describe('#account operation', function(){
    it('adds money upon deposit operation', function(){
      account.deposit(10);
      expect(account.balance).toEqual(10);
    });
  });
});
