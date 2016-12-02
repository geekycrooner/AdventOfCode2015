/* Day 8: Matchsticks */

// node.js file system operations...
const fs = require('fs');

function CodeStringCounter(stringInput) {
  //  this._strings = strings; //array
  //this._strings = new Int8Array(String.)
  var buffer;
  this._buffer = [];
  if (typeof stringInput === "undefined") { // handle when nothing is passed in
    return;
  } else {
    buffer = new Buffer('"' + stringInput + "\"", 'utf16le');
    for (var i = 0; i < buffer.length; i++) {
      this._buffer.push(buffer[i]);
    }
  }
}

CodeStringCounter.prototype.getCodeCount = function () {
  var codeCount = 0;
  this._buffer.forEach(function (item) {
    if (item.trim().length === 0)
      codeCount += 2
    else
      codeCount += item.trim().length + 2;
  }, this);
  return codeCount;
}

CodeStringCounter.prototype.getMemoryCount = function () {
  var memoryCount = 0;
  this._buffer.forEach(function (item) {
    memoryCount += item.trim().length;
  }, this);
  return memoryCount;
}

var csc = new CodeStringCounter();
csc.getCodeCount();

module.exports = CodeStringCounter;