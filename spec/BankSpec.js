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
    it('stores a new created account with a set name', function(){
      bank.openAccount();
      expect(bank._accounts).toEqual([{account1: mockAccount}])
    });
  });

  describe('#operation', function(){
    it("adds new account when 'create account' is chosen", function(){
      bank.operation('Add Account', mockAccount);
      expect(bank._accounts.length).toEqual(1);
    });
  });
});

// ______ TEMPLATES _____


  // describe('', function(){
  //   it('', function(){
  //
  //   });
  // });
