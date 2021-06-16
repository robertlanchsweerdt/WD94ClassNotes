/**
 * VARIABLES
 *
 * 1 - grammarAndTypes
 *
 *  02 - declarations.js
 *
 */

// What is a variable?

// "a bucket filled with something"

const a = 1;
const b = 2;

console.log(a + b);

/**
 *
 * notes on naming variables:
 *
 * 1. variable must begin a letter, underscore, or dollar sign
 * 2. numbers may follow characters, but cannot come first
 * 3. Javascript is case sensitive -- 'hello' and 'Hello' are different variables
 *
 * DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
 *
 * Declarations: refer to when we declare a variable (naming a variable)
 *
 * Initializations:  refer to when a variable is assigned a value (initial value)
 *
 * Assignment:  refers to giving a variablea value.  This can be after initialization.
 *
 *  */

// declared
let x;
console.log(x);

// initialized
x = 10;
console.log(x);

// assignment
x = 20;
console.log(x);

/**
 * Var, Let and Const
 *
 * var : old keyword for variables
 * let and const : new keywords for variables introducted in ES6z
 * const : a variable that cannot be changed; must be declared and initialized at the same time; cannot use assigment
 */

let tonight = 'great';
const elevenFifty = 'Amazing';

console.log(tonight, elevenFifty);
