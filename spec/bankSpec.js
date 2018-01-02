describe ('Bank', function(){
  var bank;

  beforeEach(function(){
    bank = new Bank();
  });


  describe('#initialization', function(){
      it('is an instance of Bank', function (){
        expect(bank.new).toBe(Bank());
      });
  });
});
