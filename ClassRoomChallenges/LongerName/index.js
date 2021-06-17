/* BRONZE
​
Write two variables. One will store your name and another will store a 
friend's name. Find out what property you can use to check 
how long the names are. Console log how many letters are in each name.
​
*/

const myName = 'Robert';
const friendName = 'Buddy';

console.log(`${myName} is this many characters long: ${myName.length}`);

console.log(
  `${friendName} is this many characters long: ${friendName.length} `
);

/* SILVER
​
Expand on what you have already done and write a conditional to see 
who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
​
*/

const myNameLength = myName.length;
const friendNameLength = friendName.length;

// IF-ELSE CONDITIONAL

if (myNameLength > friendNameLength) {
  console.log(`${myName}'s name is longer than ${friendName}'s`);
} else {
  console.log(`${friendName}'s name is longer than ${myName}'s`);
}

// TERNARY
myNameLength > friendNameLength
  ? console.log(`${myName}'s name is longer than ${friendName}'s`)
  : console.log(`${friendName}'s name is longer than ${myName}'s`);
