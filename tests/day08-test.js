var chai = require('chai');
var expect = chai.expect; 

var CodeStringCounter = require('../Day08.js');

describe ('CodeStringCounter', function() {

  it('getCodeCount() should return 0 if no input is passed in', function() {
    var codeStringCounter = new CodeStringCounter();
    expect(codeStringCounter.getCodeCount()).to.equal(0);
  });

  it('getMemoryCount() should return 0 if no input is passed in', function() {
    var codeStringCounter = new CodeStringCounter();
    expect(codeStringCounter.getMemoryCount()).to.equal(0);
  });

  it('getCodeCount() should return 2 if empty string is passed in', function() {
    var codeStringCounter = new CodeStringCounter("");
    expect(codeStringCounter.getCodeCount()).to.equal(2);
  });

  it('getMemoryCount() should return 0 if empty string is passed in', function() {
    var codeStringCounter = new CodeStringCounter("");
    expect(codeStringCounter.getMemoryCount()).to.equal(0);
  });

  it('getCodeCount() should return 8 if a 4 count array of empty strings is passed in', function() {
    var codeStringCounter = new CodeStringCounter(["", "", "", ""]);
    expect(codeStringCounter.getCodeCount()).to.equal(8);
  });

  it('getMemoryCount() should return 0 if a 4 count array of empty strings is passed in', function() {
    var codeStringCounter = new CodeStringCounter(["", "", "", ""]);
    expect(codeStringCounter.getMemoryCount()).to.equal(0);
  });

  it('getCodeCount() should return 5 if "abc" is passed in', function() {
    var codeStringCounter = new CodeStringCounter(["abc"]);
    expect(codeStringCounter.getCodeCount()).to.equal(5);
  });

  it('getMemoryCount() should return 3 if "abc" is passed in', function() {
    var codeStringCounter = new CodeStringCounter(["abc"]);
    expect(codeStringCounter.getMemoryCount()).to.equal(3);
  });

  it('getCodeCount() should return 10 if "aaa\"aaa" is passed in', function() {
    var codeStringCounter = new CodeStringCounter(["aaa\"aaa"]);
    expect(codeStringCounter.getCodeCount()).to.equal(10);
  });

  it('getMemoryCount() should return 7 if "aaa\"aaa" is passed in', function() {
    var codeStringCounter = new CodeStringCounter(["aaa\"aaa"]);
    expect(codeStringCounter.getMemoryCount()).to.equal(7);
  });



  // it('getCodeCount() should return 0 if no input is passed in', function() {
  //   var codeStringCounter = new CodeStringCounter([]);
  //   expect(codeStringCounter.getCodeCount()).to.equal(0);
  // });

  // it('getCodeCount() should return 0 if empty string is passed in', function() {
  //   var codeStringCounter = new CodeStringCounter([""]);
  //   expect(codeStringCounter.getCodeCount()).to.equal(0);
  // });

  // it('getCodeCount() should return 0 if an array of empty strings is passed in', function() {
  //   var codeStringCounter = new CodeStringCounter(["", "", "", "", ""]);
  //   expect(codeStringCounter.getCodeCount()).to.equal(0);
  // });


});