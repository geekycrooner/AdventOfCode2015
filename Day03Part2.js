/* 
    AdventOfCode Day 3: Perfectly Spherical Houses in a Vacuum - Part 2
    Ref:  http://adventofcode.com/2015/day/3
*/

// node.js file system operations...
const fs = require('fs');
var House = function (x, y) {
  this.x = x;
  this.y = y;
  this.presents = 1;
}

var HouseList = function() {
  this.housesVisited = [];
}
HouseList.prototype.getHouseIfVisited = function (currentHouse) {
  var currentHouseVisited, house, i;
  for (i = 0; i < this.housesVisited.length; i++) {
    house = this.housesVisited[i];
    if (house.x === currentHouse.x && house.y === currentHouse.y) {
      currentHouseVisited = house;
      break;
    }
  }
  return currentHouseVisited;
}

var PresentDeliverer = function (x, y) {
  this.x = x;
  this.y = y;
}
PresentDeliverer.prototype.goNorth = function () { this.y++; };
PresentDeliverer.prototype.goSouth = function () { this.y--; };
PresentDeliverer.prototype.goEast = function () { this.x++; };
PresentDeliverer.prototype.goWest = function () { this.x--; };
PresentDeliverer.prototype.deliverPresent = function () {
  var currentHouse = NiceList.getHouseIfVisited(new House(this.x, this.y));
  if (currentHouse) {
    // add a present
    currentHouse.presents++;
  } else {
    // else add house with one present
    NiceList.housesVisited.push(new House(this.x, this.y));
  }
};

var deliverer, i, command;

/* Test Input: strings */
//var Input =
//  '^v';          // expect 3
//  '^>v<';       // expect 3 
//  '^v^v^v^v^v'; // expect 11 

// get input file as a string
var Input = fs.readFileSync('.\\Day03Input.txt', { encoding: 'utf8' });

// start state
var NiceList = new HouseList();
var Santa = new PresentDeliverer(0, 0);
var RoboSanta = new PresentDeliverer(0, 0);

Santa.deliverPresent();
RoboSanta.deliverPresent();

// for each character in the Input...
for (i = 0; i < Input.length; i++) {
  if(i%2===0)
  deliverer = Santa;
  else
  deliverer = RoboSanta;
  // ...move to next house
  command = Input[i];
  switch (command) {
    case '^':
      deliverer.goNorth();
      break;
    case 'v':
      deliverer.goSouth();
      break;
    case '>':
      deliverer.goEast();
      break;
    case '<':
      deliverer.goWest();
      break;
  };
  // ...deliver gift
  deliverer.deliverPresent();
}

console.log("Houses receiving at least one present: " + NiceList.housesVisited.length);

