let newArr = [9, 10, 23, 64, 12, 41, 76, 53];

/** Bronze: add up the numbers in the array */

let sum = 0;
for (num of newArr) {
  console.log(num);
  sum += num;
}

console.log(sum);

let sumPartOne = 0;

for (num in newArr) {
  console.log(num);
  sumPartOne += newArr[num];
}

console.log(sumPartOne);

let sumPartTwo = 0;

for (let i = 0; i <= newArr.length - 1; i++) {
  console.log(newArr[i]);
  sumPartTwo += newArr[i];
}

console.log(sumPartTwo);

/* 
Silver:
Using the same array (newArr),get a sum of the index and element of that index. 
​
For example: 
Let's look at the 0th element, which is 10. 
10(element) + 0(index of 10) = 10
Now let's look at the 1st element, which is 23.
23(element) + 1(index of 23) = 24
​
The addition should update the array itself and you should'nt have to 
create a new array. So when you are done, newArr should look like this:
[10, 24, 66, 15, 45, 81, 59]
*/

let anotherArr = [];

for (num in newArr) {
  console.log(typeof num, num);
  anotherArr.push(newArr[num] + parseInt(num));
}

console.log(anotherArr);

/* Gold:

Declare a new variable called arr that will be initialized 
as an empty array. Inside the loop, if the number in newArr 
is a prime number,insert it in arr and using string interpolation -
 console.log 'the number ___ is a prime number'. 
 
 Hint-Use Google to search for an array method that allows you to 
 add one or more elements to an array
​
*/

const foo = [2, 3, 4, 5, 7, 8, 9, 10, 11, 12];

function checkPrime(...num) {
  if (num < 2) return;

  const root = Math.ceil(Math.sqrt(num));

  for (let i = 2; i <= root; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(checkPrime(11));

function checkPrime2(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] < 2) return;

    let isPrime = true;
    const root = Math.ceil(Math.sqrt(num[i]));

    for (let k = 2; k <= root; k++) {
      if (num[i] % k === 0) isPrime = false;
    }

    if (isPrime) console.log(num[i]);
    if (isPrime) console.log(`The number ${num[i]} is a prime number`);
  }
}

checkPrime2(foo);
