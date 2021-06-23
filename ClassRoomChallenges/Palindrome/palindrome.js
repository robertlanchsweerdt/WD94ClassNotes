//Create a loop that will loop (forEach) through an array of words that will determine if a word is
//spelled the same forward as it does backward

let wordArray = ['radar', 'john', 'racecar', 'trail', 'madam'];

for (word of wordArray) {
  let wordCheck = word.split('').reverse().join('');

  if (word === wordCheck) {
    console.log(`${word} is a palindrome`);
  }
}

wordArray.forEach((word) => {
  let wordCheck = word.split('').reverse().join('');

  if (word === wordCheck) {
    console.log(`${word} is a palindrome`);
  }
});
