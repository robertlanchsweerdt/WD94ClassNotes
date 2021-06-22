/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

const fb = 30;

for (let i = 0; i <= fb; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`Fizz Buzz ${i}`);
  } else if (i % 3 === 0) {
    console.log(`Fizz ${fb}`);
  } else if (i % 5 === 0) {
    console.log(`Buzz ${i}`);
  }
}

for (let i = 0; i <= fb; i++) {
  switch (true) {
    case i % 3 === 0 && i % 5 === 0:
      console.log(`Fizz Buzz ${i}`);
      break;
    case i % 3 === 0:
      console.log(`Fizz ${fb}`);
      break;
    case i % 5 === 0:
      console.log(`Buzz ${i}`);
  }
}

for (let i = 0; i <= fb; i++) {
  i % 3 === 0 && i % 5 === 0
    ? console.log(`Fizz Buzz ${i}`)
    : i % 3 === 0
    ? console.log(`Fizz ${i}`)
    : i % 5 === 0
    ? console.log(`Buzz ${i}`)
    : console.log(`these numbers are neither evenly dividied by 3 or 5: ${i}`);
}
