'use strict';

// _____  ACCOUNT OBJECT  ______


function Account(credit){
  this._name = '';
  this._balance = credit || 0;
  this._log = [];
  this._currentStatus = { date: 0, credit: 0, debit: 0 };
}

Account.prototype = {
  assignName: function(){
    var counter = 0;
    counter += 1;
    var name = `account${counter}`;
    this._name = name;
  },
  checkBalance: function(){
    return this._balance;
  },
  resetStatus: function(){
    this._currentStatus = { date: 0, credit: 0, debit: 0 };
  },
  logTime: function () {
    var date = new Date(Date.now()),
    month = '' + (date.getMonth() + 1),
    day = '' + date.getDate(),
    year = date.getFullYear();
    if (month.length < 2) month = '0' + month ;
    if (day.length < 2) day = '0' + day ;
    this._currentStatus.date = `${day}/${month}/${year}`;
  },
  deposit: function (funds) {
    this.resetStatus();
    this._balance += funds;
    this._currentStatus.credit = funds;
    this.logTime();
    this._log.push(this._currentStatus);
  },
  withdraw: function (funds) {
    this.resetStatus();
    this._balance -= funds;

    this.logTime();
    this._currentStatus.debit = funds;
    this._log.push(this._currentStatus);
  }
};


// _____  BANK OBJECT  ______


function Bank (){
  this._accounts = [];

}

Bank.prototype = {

  openAccount: function (){

  },
  operation: function (bankOperation, account) {
     switch(bankOperation) {
      case 'Add Account':
        this._accounts.push(account);
        break;
    }
  }
};
