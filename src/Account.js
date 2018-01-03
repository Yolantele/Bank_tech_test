'use strict';

// _____  ACCOUNT OBJECT  ______

function Account(credit){
  this._balance = credit || 0;
  this._log = [];
  this._currentStatus = { date: 0, credit: 0, debit: 0 };
}

Account.prototype = {
  resetStatus: function(){
    this._currentStatus = { date: 0, credit: 0, debit: 0 };
  },
  logTime: function () {
    var date = new Date(Date.now()),
    day = '' + date.getDate(),
    month = '' + (date.getMonth() + 1),
    year = date.getFullYear();
    if (day.length < 2) day = '0' + day ;
    if (month.length < 2) month = '0' + month ;
    this._currentStatus.date = `${day}/${month}/${year}`;
  },
  deposit: function (funds) {
    this._balance += funds;
    this._currentStatus.credit = funds;
  },
  withdraw: function (funds) {
    if (this._balance < funds){
      throw ('Insuficcient Balance Allowance');
    } else {
      this._balance -= funds;
      this._currentStatus.debit = funds;
    }
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
  this._tracker = 0
}

Bank.prototype = {
  assignedName: function(){
    this._tracker += 1;
    var counter = this._tracker;
    var name = `account${counter}`;
    return name;
  },
  openAccount: function (account){
    var name = this.assignedName();
    this._accounts.push([ name, account ]);
  },
  // operation: function (bankOperation, account) {
  //    switch(bankOperation) {
  //     case 'Add Account':
  //       this._accounts.push(account);
  //       break;
  //   }
  // }
};
