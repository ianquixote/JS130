// "use strict";
//
// bar = 'hi';
//
// console.log(bar);


function painInTheButt(callback, resultOfSomeCode) {
  //Hundreds of lines of code leading to...
  let argTwo = resultOfSomeCode;
  console.log(callback(argTwo));
}

function concatenate(argOne, argTwo) {
  return argOne + argTwo;
}

function makeAppliedConcatenate(argOne) {
  return function(argTwo) {
    return concatenate(argOne, argTwo);
  }
}

painInTheButt(makeAppliedConcatenate("You're name is "), 'Rumplestiltskin.');


function foo(callback) {
  //Hundreds of lines of code leading to...
  let resultOfSomeCode = 'Rumplestiltskin';
  let argTwo = resultOfSomeCode;
  console.log(callback(argTwo));
}

function bar(argOne, argTwo) {
  return argOne + argTwo;
}

function makeBar(argOne) {
  return function(argTwo) {
    return bar(argOne, argTwo);
  }
}

foo(makeBar("You're name is "));
