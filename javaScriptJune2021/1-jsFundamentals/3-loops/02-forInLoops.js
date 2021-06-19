/**
 * FOR IN LOOPS
 */

let student = {
  name: 'Peter',
  awesome: true,
  degree: 'javascript',
  week: 1,
};

let dogArr = ['boxer', 'beagle', 'labrador', 'puggle'];

// for objects

for (item in student) {
  console.log(item);
  console.log(student[item]);
}

// for arrays

for (dog in dogArr) {
  console.log(dog);
  console.log(dogArr[dog]);
}

// assignment:  write a for-in loop that capitalizes the first letter in a name

let newDogArr = [];

for (dog in dogArr) {
  newDogArr.push(
    dogArr[dog].substr(0, 1).toUpperCase() + dogArr[dog].substr(1).toLowerCase()
  );
}

console.log(newDogArr);
