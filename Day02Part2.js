/* Day 2: I Was Told There Would Be No Math - Part 2 */
// node.js file system operations...
const fs = require('fs');
var totalFeetOfRibbon = 0;

// //test input as array -- total feet of ribbon should be 76
// var Input = [
//     '2x3x4'     // test input, expect 34
//     // ,'1x1x10'   // test input, expect 14 
//     // ,'10x1x1'   // test input, expect 14 
//     // ,'1x10x1'   // test input, expect 14 
//     ]; 

var Input = [];

// get input file as a string
var input = fs.readFileSync('.\\Day02Input.txt', {encoding: 'utf8'});

// add input string onto Input array
Input = input.split('\r\n');

function compareNumbers(a, b) {
    return a - b;
}

function calculateFacePerimeter(a, b) {
    return 2 * a + 2 * b;
}

// given array of length, width, height, return array of lengths and widths of faces
function makeFaces (arr) {
  return arr.map(function(v, i, a){
    return [v, a[(i+1)%3]];
  });
}

function calculatePresentVolume(arr) {
    return arr.reduce(function (a, b) {
        return a * Number(b);
    });
}

function calculateRibbonForWrapping(arr) {
return ((makeFaces(arr)).map(function (v, i, a) {
    return calculateFacePerimeter(v[0],v[1]);
})).sort(compareNumbers)[0];
}

function calculateRibbonForBow(arr) {
    return calculatePresentVolume(arr);
}

function calculateTotalRibbon(input) {
    var dimensions = input.split('x');
    return calculateRibbonForBow(dimensions) + calculateRibbonForWrapping(dimensions);
}

console.log ("Total feet of ribbon needed: " + Input.reduce(function(a, b) {
    return a + calculateTotalRibbon(b);
}, 0));
