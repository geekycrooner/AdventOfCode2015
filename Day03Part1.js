/* 
    AdventOfCode Day 3: Perfectly Spherical Houses in a Vacuum - Part 1
    Ref:  http://adventofcode.com/2015/day/3
*/

// node.js file system operations...
const fs = require('fs');

var PresentDeliverer = function (x, y) {
  this.x = x;
  this.y = y;
  this.housesVisited = [];
}

PresentDeliverer.prototype.goNorth = function () { this.y++; };
PresentDeliverer.prototype.goSouth = function () { this.y--; };
PresentDeliverer.prototype.goEast = function () { this.x++; };
PresentDeliverer.prototype.goWest = function () { this.x--; };

PresentDeliverer.prototype.getHouseIfVisited = function (currentHouse) {
  var currentHouseVisited;
  for (var i = 0; i < this.housesVisited.length; i++) {
    var house = this.housesVisited[i];
    if (house.x === currentHouse.x && house.y === currentHouse.y) {
      currentHouseVisited = house;
      break;
    }
  }
  return currentHouseVisited;
}

PresentDeliverer.prototype.deliverPresent = function () {
  var currentHouse = this.getHouseIfVisited(new house(this.x, this.y));
  if (currentHouse) {
    // add a present
    currentHouse.presents++;
  } else {
    // else add house with one present
    this.housesVisited.push(new house(this.x, this.y));
  }
};

var house = function (x, y) {
  this.x = x;
  this.y = y;
  this.presents = 1;
}

/* Test Input: strings */
//var Input =
//  '>';          // expect 2
//  '^>v<';       // expect 4 
//  '^v^v^v^v^v'; // expect 2 

// get input file as a string
var Input = fs.readFileSync('.\\Day03Input.txt', { encoding: 'utf8' });
// start state
var Santa = new PresentDeliverer(0, 0);
Santa.deliverPresent();

// for each character in the Input...
for (var i = 0; i < Input.length; i++) {
  // ...move to next house
  var command = Input[i];
  switch (command) {
    case '^':
      Santa.goNorth();
      break;
    case 'v':
      Santa.goSouth();
      break;
    case '>':
      Santa.goEast();
      break;
    case '<':
      Santa.goWest();
      break;
  };
  // ...deliver gift
  Santa.deliverPresent();
}

console.log("Houses receiving at least one present: " + Santa.housesVisited.length);

