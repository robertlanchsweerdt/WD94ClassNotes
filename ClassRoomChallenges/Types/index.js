/* BRONZE
​
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.

 */

const myObj = {
  myName: 'Robert',
  age: 33,
  elevenFiftyStudent: true,
  someArr: [1, 2, 3, 4, 5],
  address: {
    street: '123 Main Street',
    city: 'Anywhere',
  },
};

const {
  myName,
  age,
  elevenFiftyStudent,
  someArr,
  address,
  address: { street, city },
} = myObj;

console.log(typeof myName);

/* SILVER
​
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
​
*/

const checkType = age;

switch (typeof checkType) {
  case 'string':
    console.log(` The typeof ${checkType} is a string`);
    break;
  case 'number':
    console.log(` The typeof ${checkType} is a number`);
    break;
  case 'boolean':
    console.log(` The typeof ${checkType} is a boolean`);
    break;
  case 'object':
    console.log(` The typeof ${checkType} is an object`);
    break;
  default:
    console.log(` The typeof ${checkType} is unknown.  What are you?`);
}
