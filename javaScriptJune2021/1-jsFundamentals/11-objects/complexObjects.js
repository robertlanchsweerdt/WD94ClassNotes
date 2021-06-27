// OBJECTS

/**
 *  dot notation -- used to get value inside an Object
 *  a KEY may NOT be a value inside of an object
 *  able to use DOT NOTATION and SQUARE BRACKETS at the same time to access Object content
 */

// JSON

/**
 *  Javascript Object Notation
 *
 *  1. everything (keys and values) are wrapped in double-quotation marks EXCEPT boolean values
 *
 *  2. JSON.stringify()
 *   2a.  transforms Object data into a string;
 *   2b.  necessary when storing Object data into localStorage
 *   2c.  localStorage.setItem('key', JSON.stringify(obj))
 *
 *  3. JSON.parse()
 *   3a.  parses JSON string back into Object format;
 *   3b.  used when extracting JSON stored data from localStorage
 *   3c.  JSON.parse(localStorage.getItem('key'))
 *
 *  4. Object.keys()
 *   4a.  returns an array consisting of the Object KEYS
 *   4b.  can use DOT NOTATION to drill deeper into viewing the KEYS
 *   4c.  Object.keys(spaceJam.toonSquad)
 *
 *  5. Object.values()
 *   5a.  returns an array consisting of the Object VALUES
 *   5b.  use DOT NOTATION to drill deeper into VALUES
 *   5c.  Object.values(spaceJam.toonsquad)
 *
 *  5. toString()
 *   5a.  can convert an array into a string
 *   5b.  Object.keys(spaceJam.toonSquad).toString()
 *
 *  6. SQUARE BRACKET
 *   6a. can get value from a variable;
 *   6b. can use variable value to get value from an array
 *   6c. lets us dynamically refer to the keys of the object -- we don't have to code specific keys
 *   6d. example:
 *
 *       let garden = {
 *          vegetable: 'tomato',
 *          fruit: 'apple'
 *       }
 *
 *      const inc = 'vegetable'
 *
 *      console.log(garden[inc]) // output will be 'tomato'
 *
 *   6d. the value of inc is 'vegetable' so the BRACKET NOTATION of garden[inc]
 *        is the same as using DOT NOTATION to write garden.vegetable
 *
 *  7. CREATE OBJECT ON THE FLY
 *   7a.  let baking = {} // created empty Obj
 *   7b.  baking['cake'] = 'bake a cake' // BRACKET NOTATION to create key and value 'on the fly'
 *   7c.  Another method to create KEY and VALUE on the fly is
 *        using DOT NOTATION:  someObj.newKey = 'your value'
 *
 */

const someObj = {
  name: 'Bill',
  age: 23,
  car: 'Honda',
  employed: true,
};

const inc = 'car';

console.log(someObj);
console.log(Object.keys(someObj));
console.log(Object.values(someObj));
console.log(someObj[inc]);

// BRACKET NOTATION to create KEY / VALUE on the fly
someObj['job'] = 'web developer';
console.log(someObj);

// DOT NOTATION to create KEY / VALUE on the fly
someObj.married = false;
console.log(someObj);
