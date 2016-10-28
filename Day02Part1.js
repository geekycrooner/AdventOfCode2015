/* Day 2: I Was Told There Would Be No Math - Part 1 */
// node.js file system operations...
const fs = require('fs');
var totalSquareFeetOfWrappingPaper = 0;

// //test input as array -- total area of wrapping paper should be 187
// var Input = [
//     '2x3x4'     // test input, expect 58
//     // ,'1x1x10'   // test input, expect 43 
//     // ,'10x1x1'   // test input, expect 43 
//     // ,'1x10x1'   // test input, expect 43 
//     ]; 

var Input = [];
// get input file as a string
var input = fs.readFileSync('.\\Day02Input.txt', {encoding: 'utf8'});
// add input string onto Input array
Input = input.split('\r\n');

function calculateSideAreas(v, i, a) {
    return Number(v) * Number(a[(i+1)%3]);
}

function compareNumbers(a, b) {
    return a - b;
}

function calculateSlack(input) {
    var presentDimensions = input.split('x');
    var sideAreas = presentDimensions.map(calculateSideAreas);
    var sortedSideAreas = sideAreas.sort(compareNumbers);
    return sortedSideAreas[0];
}

function calculateSurfaceArea(input) {
    var presentDimensions = input.split('x');
    return presentDimensions.map(calculateSideAreas).reduce(function(a, b){
      return a + (2 * b);
    }, 0);
}

function calculateRequiredWrappingPaper(input) {
    return calculateSurfaceArea(input) + calculateSlack(input);
}
// calculate area plus slack for each entry in Input and add 'em up 
totalSquareFeetOfWrappingPaper = Input.reduce(function (a, b) { 
    return a + calculateRequiredWrappingPaper(b)}, 0);

console.log("Total Square Feet of Wrapping Paper: " + totalSquareFeetOfWrappingPaper);

