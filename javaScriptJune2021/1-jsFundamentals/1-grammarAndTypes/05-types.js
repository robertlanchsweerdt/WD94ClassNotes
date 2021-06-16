// Boolean
// boolean represents: on/off, true/false, yes/no, 0/1
var on = true;
console.log(on);

let off = false;
console.log(off);

// Undefined
/**
 *  Undefined usually means a variable has been declared, but its not been initialized
 *  We forget to do something (initialize) the variable
 */

let grass;
console.log(grass);

var undef = undefined;
console.log(undef);

// Null
// means a var has been declared and assigned a valuable of null;
// intentionally initialize the variable as null (empty)

var empty = null;
console.log(empty);

/**
 * Null and Undefined both represent variables with no value inside.  Think of it this way -- null values
 * are for gag gifts that are boxes intentionally given with nothing inside (because that's the gag).
 * Undefined values are gifts given when the person giving the gift has forgotten to put the gift
 * inside the box (oops!)
 */

// Numbers
let literalAge = 90;
console.log(literalAge);

let precise = 99999999999;
console.log(precise);

// Strings
// any value within quotes; JS spits out value within quote
let stringOne = 'double quotes';
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

// string concatenation v addition
// discusses implicit coercion when a number + a string (with number in quotes) is concatenated

// Interpolation (template literal)
// lets you use strings with dynamic content (they require backticks)
let age = 32;
let string = `my age is ${age}`;

console.log(string);

// Objects
/**
 * What is an object?
 *
 * An object is a container that stores property names (keys) and their values
 * Object.key: Object.value
 *
 * Great for representing abstract concepts with a lot of values
 * Example:  a car has a lot of properties (number of doors, engine type, color, etc.)
 *
 * It can hold multiple data types
 *
 * "Dot Notation" allows you to access just one of the values
 *
 * Denoted by {}
 *
 */

let hulk = {
  color: 'green',
  age: 42,
  isStrong: true,
};

console.log(hulk);
console.log(hulk.color);
console.log(typeof hulk);

// Arrays
/**
 * Arrays stores multiple values in an ordered way.  This is the main difference between Arrays and Objects.
 * They, too, hold multiple data types.
 *
 * Denoted by []
 *
 *
 */

let stepsToBrushTeeth = [
  'uncap toothpaste',
  'squeeze toothpaste',
  'rinse brush',
  'brush',
];

console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[0]);
console.log(typeof stepsToBrushTeeth);
