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
    this._balance += funds;
    this._currentStatus.credit = funds;
  },
  withdraw: function (funds) {
    this._balance -= funds;
    this._currentStatus.debit = funds;
  },
  logTransaction: function() {
    this.logTime();
    var logEntry = this._currentStatus;
    logEntry.balance = this._balance;
    this._log.push(logEntry);
  },
  transaction: function(transaction, funds) {
    this.resetStatus();
    switch(transaction) {
      case 'deposit':
        this.deposit(funds);
        break;
      case 'withdraw':
        this.withdraw(funds);
        break;
    }
    this.logTransaction();
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
