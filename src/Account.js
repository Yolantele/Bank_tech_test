'use strict';

// _____  FORMATER  ______

function formated(date){
  var d = new Date(date),
  month = '' + (d.getMonth() + 1),
  day = '' + d.getDate(),
  year = d.getFullYear();

  if (month.length < 2) month = '0' + month ;
  if (day.length < 2) day = '0' + day ;

  return [day, month, year].join('/');
}

// _____  ACCOUNT OBJECT  ______


function Account(credit){
  this._balance = credit || 0;
  this._log = [];
  this._currentStatus = { name: '', date: 0, credit: 0, debit: 0, balance:0 };
}

Account.prototype = {
  assignName: function(){
    var counter = 0;
    counter += 1;
    var name = `account${counter}`;
    this._currentStatus.name = name;
  },
  checkBalance: function(){
    return this._balance;
  },
  resetStatus: function(){
    // this._currentStatus.each()
    this._currentStatus.date = 0;
    this._currentStatus.credit = 0;
    this._currentStatus.debit = 0;
    this._currentStatus.balance = 0;
    this._currentStatus.name = '';
  },
  deposit: function (funds) {
    this.resetStatus();
    this._balance += funds;
    this._currentStatus.balance = this._balance;
    this._currentStatus.date = formated(Date.now());
    this._currentStatus.credit = funds;
    this._log.push(this._currentStatus);
  },
  withdraw: function (funds) {
    this.resetStatus();
    this._balance -= funds;
    this._currentStatus.balance = this._balance;
    this._currentStatus.date = formated(Date.now());
    this._currentStatus.debit = funds;
    this._log.push(this._currentStatus);
  }
  // transaction: function (operation, funds) {
  //   switch(operation){
  //     case 'deposit' :
  //       deposit(funds);
  //
  //   }
  // }
};


// _____  BANK OBJECT  ______


function Bank (){
  this._accounts = [];
}

Bank.prototype = {

  operation: function (bankOperation, account) {
     switch(bankOperation) {
      case 'Add Account':
        this._accounts.push(account);
        break;
      // case 'Status Update':
      //
      //   if account.

    };
  }
};
