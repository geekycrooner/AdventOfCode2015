/* Day 6: Probably a Fire Hazard */

/*
    NOTE: My first answer was wrong...

    "That's not the right answer; your answer is too low. If you're stuck, 
    there are some general tips on the about page, or you can ask for hints on the subreddit. 
    Please wait one minute before trying again. (You guessed 545112.)" 
    
    Turns out I had forgotten to cast the Strings as Numbers... Argh! That cost me a star...
*/

// node.js file system operations...
const fs = require('fs');

var Input = [];
var grid = [];
var rowIndex, colIndex;
var row;
var instIndex;
var element, instruction;
var coordStart, coordEnd;
var lowX, lowY, highX, highY;
var x, y;
var lightsLit;

// get input file as a string
var input = fs.readFileSync('.\\Day06Input.txt', { encoding: 'utf8' });
/* Tests */
// var input = 
// 'turn on 489,959 through 759,964\r\n' // 1626 
// + 'turn off 820,516 through 871,914\r\n' // 1626
// + 'turn off 427,423 through 929,502\r\n' // 1626
// + 'turn on 774,14 through 977,877\r\n' // 1626 + 176256 = 177882
// + 'turn on 410,146 through 864,337\r\n' // 177882 + 69888 = 247770
// + 'turn on 931,331 through 939,812\r\n' //247770
// + 'turn off 756,53 through 923,339'; //247770 - 13950 - 32256 - 300 = 201264 

// add input string onto Input array
Input = input.split('\r\n');

// create the grid -- lights all off...
for (rowIndex = 0; rowIndex < 1000; rowIndex++) {
  row = [];
  for (colIndex = 0; colIndex < 1000; colIndex++) {
    row.push(0);
  }
  grid.push(row);
}

// for each instruction in the Input,
for (instIndex = 0; instIndex < Input.length; instIndex++) {
  element = Input[instIndex];
  instruction = element.split(' ');
  // parse the instruction  (turn on, turn off, toggle)
  if (instruction[0] === 'turn') {
    coordStart = instruction[2].split(',');
    coordEnd = instruction[4].split(',');

    // make sure coordinates are always the same relative to the origin (0,0)
    lowX = lowY = highX = highY = 0;
    if (Number(coordStart[0]) <= Number(coordEnd[0])) {
      lowX = Number(coordStart[0]);
      highX = Number(coordEnd[0]);
    } else {
      lowX = Number(coordEnd[0]);
      highX = Number(coordStart[0]);
    }
    if (Number(coordStart[1]) <= Number(coordEnd[1])) {
      lowY = Number(coordStart[1]);
      highY = Number(coordEnd[1]);
    } else {
      lowY = Number(coordEnd[1]);
      highY = Number(coordStart[1]);
    }

    // flip the lights on or off
    x = y = 0;
    for (x = lowX; x <= highX; x++) {
      for (y = lowY; y <= highY; y++) {
        if (instruction[1] === 'on')
          grid[x][y] = 1;
        else
          grid[x][y] = 0;
      }
    }
  } else if (instruction[0] === 'toggle') {
    coordStart = instruction[1].split(',');
    coordEnd = instruction[3].split(',');

    // make sure coordinates are always the same relative to the origin (0,0)
    lowX = lowY = highX = highY = 0;
    if (Number(coordStart[0]) <= Number(coordEnd[0])) {
      lowX = Number(coordStart[0]);
      highX = Number(coordEnd[0]);
    } else {
      lowX = Number(coordEnd[0]);
      highX = Number(coordStart[0]);
    }
    if (Number(coordStart[1]) <= Number(coordEnd[1])) {
      lowY = Number(coordStart[1]);
      highY = Number(coordEnd[1]);
    } else {
      lowY = Number(coordEnd[1]);
      highY = Number(coordStart[1]);
    }
    // toggle the lights
    x = y = 0;
    for (x = lowX; x <= highX; x++) {
      for (y = lowY; y <= highY; y++) {
        if (grid[x][y] === 1)
          grid[x][y] = 0;
        else
          grid[x][y] = 1;
      }
    }
  }
}

// count the lights in the grid
lightsLit = 0;
for (rowIndex = 0; rowIndex < 1000; rowIndex++) {
  for (colIndex = 0; colIndex < 1000; colIndex++) {
    lightsLit += grid[rowIndex][colIndex];
  }
}

console.log("Number of lights that are lit: " + lightsLit);