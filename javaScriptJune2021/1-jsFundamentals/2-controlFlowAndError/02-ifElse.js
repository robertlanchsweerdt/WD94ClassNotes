// IF ELSE CONDITIONALS

let weather = 75;
if (weather < 70) {
  console.log('wear a jacket');
} else {
  console.log('No jacket necessary');
}

// you can blend complex conditionals and if-else statements based on your need:
if (weather > 70 && typeof weather === 'number') {
  console.log('this weather is amazing');
} else {
  console.log(
    'Either the temperature is cool, the variable is not a string, or both'
  );
}

// ELSE IF CONDITIONAL
// can check for multiple conditions

let age = 18;
if (age >= 25) {
  console.log('Yay! You can rent a car');
} else if (age >= 21) {
  console.log('Yay!  You can visit bars');
} else if (age >= 18) {
  console.log('Yay! You can vote');
} else {
  console.log('Sorry, you are too young to do anything fun');
}
