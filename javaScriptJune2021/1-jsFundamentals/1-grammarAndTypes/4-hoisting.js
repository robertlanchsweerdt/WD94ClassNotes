/**
 * HOISTING
 *
 * var gets hoisted to the top as a declaration but the assignment / initialization does not
 * function gets hoisted to the top
 *
 * let and const do not get hoisted
 * arrow functions do not get hoisted
 *
 */

// example 1:
// console.log(foo);
// var foo = 'marty';

// example 1 breakdown:
var foo; // foo on line 8 gets declared and hoisted to the top
console.log(foo); // console.log on line 7 then gets read
foo = 'marty'; // then the code reads the value assignment

// example 2 with function

function someFunc() {
  console.log(a);
  var a = 'tony';
  console.log(a);
}

someFunc();
