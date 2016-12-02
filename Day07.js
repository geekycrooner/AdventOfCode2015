/* Day 7: Some Assembly Required */

// node.js file system operations...
const fs = require('fs');
var input, circuit, instIndex;

/* Wire 'class' */
var Wire = function (id, signal) {
  this.id = id;
  this.signal = signal;
};
Wire.prototype.display = function () {
  console.log(this.id + ': ' + this.signal);
};

/* Circuit 'class' */
var Circuit = function () {
  this.wires = [];
  this.signals = [];
};
Circuit.prototype.addWire = function (wire) {
  this.wires.push(wire);
};
Circuit.prototype.getWire = function (wireName) {
  var foundWire;
  this.wires.find(function (element, index, array) {
    if (element.id === wireName) foundWire = element;
  });
  return foundWire; // wire or undefined
};
Circuit.prototype.sortWires = function () {
  this.wires.sort(function (wire1, wire2) {
    if (wire1.id > wire2.id) return 1;
    if (wire1.id < wire2.id) return -1;
    return 0;
  });
};
Circuit.prototype.displayWires = function () {
  this.sortWires();
  this.wires.forEach(function (wire) {
    wire.display();
  });
};
Circuit.prototype.getWireSignals = function () {
    this.sortWires();
    for (var index = 0; index < this.wires.length; index++) {
      var element = this.wires[index];
      console.log(element.id + ': ' + this.processSignal(element.signal));
      
    }

  // this.wires.forEach(function (wire) {
  //   console.log(wire.id + ': ' + this.processSignal(wire.signal));
  // }, this);
};

Circuit.prototype.processSignal = function (signal) { //(wire) {
  var output; 
  var inputSignal = signal; // wire.signal;
  if (!isNaN(inputSignal)) {// if it's a number, it's a signal value...
    return inputSignal;
  } else if (inputSignal.split(' ').length === 1) { // if it's not a number, it could be a wire id
    this.processSignal(inputSignal);
  } else { // it's a gate
    var gateDesc = inputSignal.split(' ');
    if (gateDesc[0] === 'NOT') {
      output = 65535 - this.processSignal(gateDesc[1]);
    } else {
      switch (gateDesc[1]) {
        case 'AND':
          output = this.processSignal(gateDesc[0]) & this.processSignal(gateDesc[2]);
          break;
        case 'OR':
          output = this.processSignal(gateDesc[0]) | this.processSignal(gateDesc[2]);
          break;
        case 'LSHIFT':
          output = this.processSignal(gateDesc[0]) << gateDesc[2];
          break;
        case 'RSHIFT':
          output = this.processSignal(gateDesc[0]) >> gateDesc[2];
          break;
        default:
          break;
      }
    }
  }
  return output;
};

Circuit.prototype.parseInstruction = function (instruction) {
  var instArray = instruction.split(' -> ');
  var wire = this.getWire(instArray[1]);
  if (wire)
    wire.signal = instArray[0];
  else
    this.addWire(new Wire(instArray[1], instArray[0]));
};
// Circuit.prototype.runInstruction = function (instruction) {
//   // assume the instruction's format is valid and get input signal and wire
//   var instArray = instruction.split(' -> ');
//   var inputSignal = instArray[0].trim();
//   var wireID = instArray[1].trim();
//   var wire = this.getWire(wireID);

//   // TODO: see what kind of instruction it is
//   if (!Number.isNaN(Number(inputSignal))) {// if it's a number, its a signal value...
//     // if the wire exists, change its signal
//     if (wire) {
//       wire.signal = inputSignal;
//     } else {
//       //otherwise, create it and set its signal
//       this.addWire(new Wire(wireID, inputSignal));
//     }
//   } else if (inputSignal.split(' ').length === 1) { // if it's not a number, it could be a wire id
//     // get the input wire
//     var inputWire = this.getWire(inputSignal);
//     // if the output wire exists, change its signal
//     if (wire) {
//       wire.signal = inputWire.signal;
//     } else {
//       //otherwise, create it and set its signal
//       this.addWire(new Wire(wireID, inputWire.signal));
//     }
//   } else { // it's a gate
//     var gateDesc = inputSignal.split(' ');
//     if (gateDesc[0] === 'NOT') {
//       this.runInstruction(65535 - this.getWire(gateDesc[1]).signal + ' -> ' + wireID);
//     } else {
//       switch (gateDesc[1]) {
//         case 'AND':
//           this.runInstruction((this.getWire(gateDesc[0]).signal & this.getWire(gateDesc[2]).signal) + ' -> ' + wireID);
//           break;
//         case 'OR':
//           this.runInstruction((this.getWire(gateDesc[0]).signal | this.getWire(gateDesc[2]).signal) + ' -> ' + wireID);
//           break;
//         case 'LSHIFT':
//           this.runInstruction((this.getWire(gateDesc[0]).signal << gateDesc[2]) + ' -> ' + wireID);
//           break;
//         case 'RSHIFT':
//           this.runInstruction((this.getWire(gateDesc[0]).signal >> gateDesc[2]) + ' -> ' + wireID);
//           break;
//         default:
//           break;
//       }
//     }
//   }
// };


// // get input file as a string
var input = fs.readFileSync('.\\Day07Input.txt', { encoding: 'utf8' });
/* Tests */
// var input =
//   '123 -> x\r\n'          // x: 123
//   + '456 -> y\r\n'        // y: 456
//   + 'x AND y -> d\r\n'    // d: 72
//   + 'x OR y -> e\r\n'     // e: 507
//   + 'x LSHIFT 2 -> f\r\n' // f: 492
//   + 'y RSHIFT 2 -> g\r\n' // g: 114
//   + 'NOT x -> h\r\n'      // h: 65412
//   + 'NOT y -> i';         // i: 65079

// add input strings onto Input array
Input = input.split('\r\n');

circuit = new Circuit();

// for each instruction in the Input array
for (instIndex = 0; instIndex < Input.length; instIndex++) {
  // load the instructions into the circuit
  circuit.parseInstruction(Input[instIndex]);
}

//circuit.displayWires();
circuit.getWireSignals();
//circuit.processSignal('lx');

//console.log("Number of lights that are lit: " + lightsLit);