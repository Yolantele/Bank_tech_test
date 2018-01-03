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
  this._balance = credit || 0;
  this._log = [];
  this._currentStatus = { date: 0, credit: 0, debit: 0, balance:0 };
}

Account.prototype = {
  checkBalance: function(){
    return this._balance;
  },
  resetStatus: function(){
    // this._currentStatus.each()
    this._currentStatus.date = 0;
    this._currentStatus.credit = 0;
    this._currentStatus.debit = 0;
    this._currentStatus.balance = 0;
  },
  deposit: function (credit) {
    this.resetStatus();
    this._balance += credit;
    this._currentStatus.balance = this._balance;
    this._currentStatus.date = formated(Date.now());
    this._currentStatus.credit = credit;
    this._log.push(this._currentStatus);
  },
  withdraw: function (debit) {
    this.resetStatus();
    this._balance -= debit;
    this._currentStatus.balance = this._balance;
    this._currentStatus.date = formated(Date.now());
    this._currentStatus.debit = debit;
    this._log.push(this._currentStatus);
  }
};

function Bank (account){
  this._accounts = [account];
}

// Bank.prototype = {
//   operation: function (bankOperation) {
//     switch()
// };
