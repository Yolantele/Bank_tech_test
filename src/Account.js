'use strict';

  function formated(date){
    var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2) month = '0' + month ;
    if (day.length < 2) day = '0' + day ;

    return [day, month, year].join('/');
  }

function Account(credit){
  this.balance = credit || 0;
  this.log = [];
  this.currentStatus = { date: 0, credit: 0, debit: 0, balance:0 };
}

Account.prototype = {
  checkBalance: function(){
    return this.balance;
  },
  resetStatus: function(){
    this.currentStatus.date = 0;
    this.currentStatus.credit = 0;
    this.currentStatus.debit = 0;
    this.currentStatus.balance = 0;
  },
  deposit: function (credit) {
    this.resetStatus();
    this.balance += credit;
    this.currentStatus.balance = this.balance;
    this.currentStatus.date = formated(Date.now());
    this.currentStatus.credit = credit;
    this.log.push(this.currentStatus)
  },
  withdraw: function (debit) {
    this.resetStatus();
    this.balance -= debit;
    this.currentStatus.balance = this.balance;
    this.currentStatus.date = formated(Date.now());
    this.currentStatus.debit = debit;
    this.log.push(this.currentStatus);
  }
};
