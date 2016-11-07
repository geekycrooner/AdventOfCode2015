/* 
    AdventOfCode Day 4: The Ideal Stocking Stuffer - Part 2
    Ref:  http://adventofcode.com/2015/day/4
*/

// node.js file system operations...
const crypto = require('crypto');

var numberOfLeadingZeroes = 6;
var secretKeys = ['abcdef', 'pqrstuv', 'yzbqklnj'];
var hash, hashed, counter;

secretKeys.forEach(function (element) {
  counter = 0;
  do {
    counter++;
    hash = crypto.createHash('md5');
    hashed = hash.update(element + counter);
  } while (hashed.digest('hex').substring(0, numberOfLeadingZeroes) !== '0'.repeat(numberOfLeadingZeroes));
  console.log('For the secret key ' + element + ', the lowest positive number that produces a hash with ' + numberOfLeadingZeroes + ' leading zeroes is: ' + counter);
})
