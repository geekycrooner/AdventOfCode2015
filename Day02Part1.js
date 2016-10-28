/* Day 2: I Was Told There Would Be No Math - Part 1 */
// node.js file system operations...
const fs = require('fs');
// test input as array -- total area should be 187
// var Input = [
//     '2x3x4'     // test input, expect 58
//     ,'1x1x10'   // test input, expect 43 
//     ,'10x1x1'   // test input, expect 43 
//     ,'1x10x1'   // test input, expect 43 
//     ]; 
var Input = [];

var totalSquareFeetOfWrappingPaper = 0;

// get input file as a string
var input = fs.readFileSync('./Day02Input.txt', {encoding: 'utf8'});
// add input string onto Input array
Input.push(input);

function calculateSlack(input) {
    var dimension = input.split('x');
var sides = [];
var smallestSide;
sides[0] = dimension[0] * dimension[1];
sides[1] = dimension[1] * dimension[2];
sides[2] = dimension[0] * dimension[2];
smallestSide = sides[0];
sides.forEach(function(value, index, array){
    if (value < smallestSide) smallestSide = value;
});
    return  smallestSide;
}

function calculateSurfaceArea(input) {
    var dimension = input.split('x');
    return 2 * (dimension[0] * dimension[1])
          + 2 * (dimension[1] * dimension[2])
          + 2 * (dimension[0] * dimension[2]); 
}

function calculateRequiredWrappingPaper(input) {
    return calculateSurfaceArea(input) + calculateSlack(input);
}
// read input line by line, calculate area plus slack 
Input.forEach(function (value, index, array) {
    totalSquareFeetOfWrappingPaper +=
    calculateRequiredWrappingPaper(value);
    });

console.log("Total Square Feet of Wrapping Paper: " + totalSquareFeetOfWrappingPaper);
