// ARRAYS

/**
 * 1. Use square brackets []
 * 2. hold multiple datatypes
 * 3. list datatypes in an ordered, numbered way
 * 4. typeof Object
 * 5. instanceof tells me the array is an array
 * 6. hidden keys are numbered started with zero (0)
 * 7. LOOPS:
 *   7a.  FOR OF used for arrays, and returns the value;
 *   7b.  FOR OF requires object to be iterable (meaning numbered / ordered)
 *   7c.  FOR IN used for objects and returns the key
 *   7d.  FOR IN used in array will return the hidden key (array position number)
 *
 * ARRAY METHODS -- built in functions
 *
 * 1. push() -- adds to an array (added at end of array)
 *
 * 2. splice() -- removes and add new items to an array
 *   2a.  mutates an existing array
 *   2b.  asks for an insertion point, how many items to remove, then item to add
 *   2c.  foo.splice(1,1,"new item") --- starting at position 1, will remove 1 item and add "new item"
 *   2d.  foo.splice(2,0, "new item") --- starting at position 2, will remove 0 items and ADD "new item"
 *
 * 3. pop() -- removes LAST element in the array
 *
 * 4. slice() -- returns a shallow copy of the array;
 */

let students = ['Tony', 'Mark', 23, true, ['Bob', 'Sue']];

console.log(typeof students);
console.log(students instanceof Array);
