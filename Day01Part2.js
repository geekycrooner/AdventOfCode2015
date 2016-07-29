/* Day 1: Not Quite Lisp - Part 2 */
// node.js file system operations...
const fs = require('fs');
// test input as array
var Input = [
    ')'          // test input, expect 1
    ,'()())'     // test input, expect 5 
    ]; 
var currentFloor, startingFloor = 0, basement = -1, position = 0;
// get input file as a string
var input = fs.readFileSync('Day01Input.txt', {encoding: 'utf8'});
// add input string onto Input array
Input.push(input);
// read input character by character
// if "(", go up -- currentFloor++
// if ")", go down -- currentFloor--
Input.forEach(function (value, index, array) {
    currentFloor = startingFloor;
    position = 0;
    for (var i = 0; i < value.length; i++) {
        var char = value[i];
        switch (char) {
            case '(':
                currentFloor++;
                break;
            case ')':
                currentFloor--;
                break;
        }
        if (position === 0 && currentFloor === basement) {
            position = i + 1;
        }
    }
    console.log("Input "+ index + ": Starting Floor: " + startingFloor + ", Ending Floor: " + currentFloor + ", First entered basement at position: " + position);
});
