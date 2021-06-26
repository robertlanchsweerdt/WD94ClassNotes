/**
 * LITERALS
 * refers to a notation (data type) for representing a fixed value in source code.
 * a data type is a literal that holds a value in the source code
 *
 * literal -- what we hard code into the variable compared to what
 * dynamically is created
 *
 *
 * toString() converts an Array to a single string
 *
 * data types - primative and complex
 * Primative: strings, numbers, booleans, undefined, null, symbols, BigInt
 * Complex: objects, arrays and functions
 *
 * Array and Object literals can hold primitive and 'complex' data types
 *
 * Object literal:  a hard-coded object with all of the key-value pairs explicitly typed out
 *
 */

let weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

console.log(weekDays.toString());
console.log(weekDays[1]);

let soups = {
  a: 'chicken noodle',
  b: 'tomato',
  c: 'clam chowder',
  d: 'vegetable',
};

console.log(soups.a);

("array and object literals can hold primitive and 'complex' types (arrays, objects, functions)");
