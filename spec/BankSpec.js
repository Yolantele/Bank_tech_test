require('../src/Account');

describe ('Bank', function(){
  var bank;
  var CURRENT_DATE = '03/01/2018';

  beforeEach(function(){
    bank = new Bank();
  });

  describe('#initialize', function(){
    it('takes in new account upon initialization', function (){
      expect(bank._accounts).toBe( [new Account()] );
    });
  });
});
