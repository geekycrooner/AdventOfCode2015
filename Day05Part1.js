/* 
    AdventOfCode Day 5: Doesn't He Have Intern-Elves For This? - Part 1
    Ref:  http://adventofcode.com/2015/day/5
*/

// node.js file system operations...
const fs = require('fs');

var hasAtLeastThreeVowels = function (word) {
  var pattern = /([aeiou].*){3}/;
  return pattern.test(word); 
}

var hasAtLeastOneDoubleLetter = function (word) {
  var pattern = /(.)(?=\1)/;
  return pattern.test(word);
}

var hasBadStrings = function (word) {
  var pattern = /ab|cd|pq|xy/; //
  return pattern.test(word);
}

// get input file as a string
var input = fs.readFileSync('.\\Day05Input.txt', { encoding: 'utf8' });
var Input = input.split('\r\n');

var niceStrings = 0;

for (var index = 0; index < Input.length; index++) {
  var element = Input[index];
  if (hasAtLeastThreeVowels(element) && 
      hasAtLeastOneDoubleLetter(element) && 
      !hasBadStrings(element)) {
    niceStrings++;
  }
}

console.log("Number of nice strings: " + niceStrings);