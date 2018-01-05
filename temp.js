inside renderer

  convertData: function (logData){  // expects to receive an array
    logData.forEach( function(log){
      var date    = log.date || 'n/a';
      var credit  = log.credit || 'n/a';
      var debit   = log.debit || 'n/a';
      var balance = log.balance || 'n/a';
      var line = ` ${date} || ${credit} || ${debit} || ${balance} \n`;
      this._logLines.push(line);
    });
  }
  // output: function () {
  //   var status = this._logLines.join('\n');
  //   headline() + status;
  // }


inside spec RENDERER
describe('#convertData', function(){
  it('converts hash data structure to log lines', function (){
    logData = [ { date: '14/01/2012', credit: 500, debit: 0, balance: 500 } ];
    renderer.convertData(logData);
    expect(renderer._logLines).toEqual([]);
  });
});
