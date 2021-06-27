// ARRAYS

/**
 * 1. Use square brackets []
 * 2. hold multiple datatypes
 * 3. list datatypes in an ordered, numbered way
 * 4. typeof Object
 * 5. instanceof tells me the array is an array (returns true or false)
 * 6. hidden keys are numbered started with zero (0)
 *
 * 7. LOOPS:
 *   7a.  FOR OF used for arrays, and returns the value;
 *   7b.  FOR OF requires object to be iterable (meaning numbered / ordered)
 *   7c.  FOR IN used for objects and returns the key
 *   7d.  FOR IN used in array will return the hidden key (array position number)
 *
 * ARRAY METHODS -- built in functions
 *
 * NOTE:  'dot notation' lets us grab methods or properties (object) of key value pairs
 *
 * 1. push() -- adds to an array (added at end of array)
 *
 * 2. splice(insertIndex, numberToRemove, insertItem) -- removes and add new items to an array
 *   2a.  mutates an existing array
 *   2b.  asks for an insertion point, how many items to remove starting from the insertion point, then item to add
 *   2c.  foo.splice(1,1,"new item") --- starting at position 1, will remove 1 item and add "new item"
 *   2d.  foo.splice(2,0, "new item") --- starting at position 2, will remove 0 items and ADD "new item"
 *
 * 3. pop(item) -- removes LAST element in the array
 *
 * 4. slice(start, stop) -- returns a shallow copy of the array; takes a start position (start index) and stop position (stop index... not to be included in the return)
 *
 * 5. forEach(item, index) -- iterate with loops to directly grab the elements and the index
 *
 * 6. reverse() --
 *
 * 7. length -- method will count the number of items in an array; notice it does not use the () invocation;
 *
 */

let students = ['Tony', 'Mark', 23, true, ['Bob', 'Sue']];

console.log(typeof students);
console.log(students instanceof Array);
