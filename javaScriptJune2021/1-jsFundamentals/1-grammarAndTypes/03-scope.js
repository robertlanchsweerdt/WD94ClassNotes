/**
 * SCOPE
 *
 * JS has both LOCAL and GLOBAL scope
 *
 * var vs. let
 * var does not obey 'block' scope (what is inside curly braces)
 * let DOES obey 'block' scope
 *
 * Types of JS scope levels:
 *
 * 1. Global scope
 * 2. Function level scope
 * 3. Block level scope
 *
 */

var x = 23;

function scope() {
  var x = 50;
  console.log(x);
}

scope();
console.log(x);

let z = 1;

function newScope() {
  let z = 2;

  function anotherScope() {
    let z = 3;
    console.log(z);
  }

  anotherScope();
  console.log(z);
}

newScope();
console.log(z);

// example of BLOCK scope function

var y = 50;

function someScope() {
  var y = 40;

  // block scope
  if (true) {
    var y = 20;
    console.log(y);
  }

  console.log(y);
}

someScope();
console.log(y);
