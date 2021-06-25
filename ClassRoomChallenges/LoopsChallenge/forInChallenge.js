const obj = {
  key1: 'value 1',
  key2: 'value 2',
  key3: 'value 3',
};

console.log(Object.keys(obj).length);

for (item in obj) {
  console.log(obj[item].toUpperCase());
}

/* BRONZE
​
    - Using a for in loop, console.log the name of each character 
	from the members key in the fellowshipOfTheRing object.
​
*/

let fellowshipOfTheRing = {
  members: {
    Gandalf: 'Staff',
    Frodo: 'Sting',
    Sam: 'Lembas Bread',
    Aragorn: 'Anduril',
    Legolas: 'Bow of the Galadhrim',
    Gimli: 'Walking Axe',
    Pippin: 'Barrow Blades',
    Merry: 'Barrow Blades',
    Boromir: 'Horn of Gondor',
  },
  purpose:
    'To take the One Ring to Mordor, where it is to be "cast into the fiery chasm from whence it came," in order for it to be destroyed and Sauron\'s power to come to an end.',
  formed: '25 October, 3018',
  dissolved: '26 February, 3019',
};

for (let member in fellowshipOfTheRing.members) {
  console.log(member);
}

/* SILVER
    - Add a conditional to the for in loop that checks if the characters name does not begin with a vowel. 
    Then, using string interpolation, console.log either '__'s name does not begin with a vowel' or
     '__'s name does begin with a vowel'.
​
*/

for (let member in fellowshipOfTheRing.members) {
  console.log(member.charAt(0));
  console.log(member[0]);

  if (
    member.toLowerCase().charAt(0) === 'a' ||
    member.toLowerCase().charAt(0) === 'e' ||
    member.toLowerCase().charAt(0) === 'i' ||
    member.toLowerCase().charAt(0) === 'o' ||
    member.toLowerCase().charAt(0) === 'u'
  ) {
    console.log(`${member}'s name does begin with a vowel`);
  } else {
    console.log(`${member}'s name does begin with a vowel`);
  }
}

/* GOLD
​
    - Declare a globally scoped variable of arr that is initialized 
	as an empty array. If the characters name does not begin with a vowel, 
	add that character to the new array, and then console.log the array.
​
*/

const noVowels = [];

for (let member in fellowshipOfTheRing.members) {
  console.log(member.charAt(0));
  console.log(member[0]);

  if (
    member.toLowerCase().charAt(0) === 'a' ||
    member.toLowerCase().charAt(0) === 'e' ||
    member.toLowerCase().charAt(0) === 'i' ||
    member.toLowerCase().charAt(0) === 'o' ||
    member.toLowerCase().charAt(0) === 'u'
  ) {
    console.log(`${member}'s name does begin with a vowel`);
  } else {
    console.log(`${member}'s name does begin with a vowel`);
    noVowels.push(member);
  }
}

console.log(noVowels);

/*
    PLATINUM:
    Declare a globally scoped variable of newArr that is initialized as an empty array. Add the character keys into newArr. 
    newArr should look like this 
   [
  'Staff',
  'Sting',
  'Lembas Bread',
  'Anduril',
  'Bow of the Galadhrim',
  'Walking Axe',
  'Barrow Blades',
  'Barrow Blades',
  'Horn of Gondor'
   ]
    and then sort the newArr by their length
    newArr should look like this:
    [
  'Staff',
  'Sting',
  'Anduril',
  'Walking Axe',
  'Lembas Bread',
  'Barrow Blades',
  'Barrow Blades',
  'Horn of Gondor',
  'Bow of the Galadhrim'
]
*/

const newArr = [];

for (let member in fellowshipOfTheRing.members) {
  newArr.push(fellowshipOfTheRing.members[member]);
}

console.log(newArr.sort());

// backwards version 1
console.log(
  newArr.sort((a, b) => {
    return -1;
  })
);

// backwards version 2
console.log(newArr.sort().reverse());

// sort by length | version 1
// console.log(
//   newArr.sort((a, b) => {
//     return a.length - b.length;
//   })
// );

// sort by length | version 2

for (let i = 0; i < newArr.length; i++) {
  console.log(newArr[i]);

  let temp = newArr[i];

  console.log(temp);

  let j = i - 1;
  console.log(j);

  console.log(temp.length);

  while (j >= 0 && temp.length < newArr[j].length) {
    console.log(temp.length);
    newArr[j + 1] = newArr[j];
    j--;
  }

  newArr[j + 1] = temp;
}

console.log(newArr);
