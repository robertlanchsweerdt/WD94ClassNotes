// COUNTING SUM CHALLENGE

// Write a function that adds together all the numbers between any two numbers.
// Your function will accept two parameters. One for the starting number and another for the ending number.
// console.log the final sum of the numbers.

function countingSum(a, b) {
  let sum = 0;

  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum;
}

//Results for testing
console.log(countingSum(1, 100)); // = 5050
console.log(countingSum(35, 77)); // = 2408
console.log(countingSum(234, 567)); // = 133767
