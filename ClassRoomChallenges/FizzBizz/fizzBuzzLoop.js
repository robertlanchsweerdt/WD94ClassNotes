// FIZZBUZZ FOR LOOP

// Create a for loop that counts from 0 to 100

// Within the for loop write a conditional that checks each number and:
// Prints out "Fizz" if the number is divisible by 3
// Prints out "Buzz" if the number is divisible by 5
// Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
// Prints out the number if it is not divisible by 3 or 5

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('Fizz Buzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// Extra Challenge if you finish the above early:
// -Wrap the for loop in a function
// -Have the function take in a parameter
// -The parameter should determine how many times to loop executes
// -Note: Be sure to invoke your function!

function fizzBuzz(q) {
  for (let i = 0; i <= q; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('Fizz Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(50);
