
  function formatDate(date){
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
}

Account.prototype = {
  checkBalance: function(){
    return this.balance;
  },
  deposit: function (credit) {
    this.balance += credit;
    var balance = this.balance;
    var date = formatDate(Date.now());
    this.log.push({date:date, credit:credit, balance:balance});
  }
};
