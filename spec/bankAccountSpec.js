describe ('bankAccount', function(){
  var bankAccount;

  beforeEach(function(){
    bankAccount = new BankAccount();
  });

  it('new account has default balance of 0', function (){
    expect(bankAccount.balance).toEqual(0);
  });
  it('can be set to a new balance upon instantiation', function(){
    account = new BankAccount(40);
    expect(account.balance).toEqual(40);
  });

});
