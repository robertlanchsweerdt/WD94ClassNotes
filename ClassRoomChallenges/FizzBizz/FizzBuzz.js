/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

for (let fb = 0; fb <= 30; fb++) {
  if (fb % 3 === 0 && fb % 5 === 0) {
    console.log(`Fizz Buzz ${fb}`);
  } else if (fb % 3 === 0) {
    console.log(`Fizz ${fb}`);
  } else if (fb % 5 === 0) {
    console.log(`Buzz ${fb}`);
  }
}

for (let fb = 0; fb <= 30; fb++) {
  switch (true) {
    case fb % 3 === 0 && fb % 5 === 0:
      console.log(`Fizz Buzz ${fb}`);
      break;
    case fb % 3 === 0:
      console.log(`Fizz ${fb}`);
      break;
    case fb % 5 === 0:
      console.log(`Buzz ${fb}`);
  }
}

for (let fb = 0; fb <= 30; fb++) {
  fb % 3 === 0 && fb % 5 === 0
    ? console.log(`Fizz Buzz ${fb}`)
    : fb % 3 === 0
    ? console.log(`Fizz ${fb}`)
    : fb % 5 === 0
    ? console.log(`Buzz ${fb}`)
    : console.log(`these numbers are neither evenly dividied by 3 or 5: ${fb}`);
}
