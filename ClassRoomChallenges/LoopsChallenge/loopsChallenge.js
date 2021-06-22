let newArr = [10, 23, 64, 12, 41, 76, 53];

/** add up the numbers in the array */

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
