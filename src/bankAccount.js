'use strict';

function BankAccount(money){
  this.balance = money || 0;
}

BankAccount.prototype = {
  checkBalance: function(){
    return this.balance;
  },
  deposit: function (money) {
    this.balance += money;
  }
};
