/* BRONZE
​
    - Using a for of loop, console.log the name of each pie from the 
    pies array.
​
*/

let pies = [
  'apple',
  'blueberry',
  'apple peach',
  'chocolate peanut butter',
  'cherry',
  'cherry apple',
  'oreo',
  'chicken pot',
  'shepherd',
];

for (pie of pies) {
  console.log(pie);
}

/* SILVER
    - Have the conditional check if EACH pie from the pies array is of the type 'apple'.
    - If it is of type apple console log ____ pie is of type apple otherwise
     console log  _____ pie is not of type apple
​
    - Use google to search for an array method that checks if an array includes a certain value
​
*/

for (pie of pies) {
  if (pie.includes('apple')) {
    console.log(`${pie} pie is a type of apple`);
  } else {
    console.log(`${pie} pie is not of type apple`);
  }
}

/* GOLD
​
 - Nest a conditonal inside of the for of loop that checks if a 
    single pie from the pies array is of the type 'fruit pie' - ie. 
    apple pie is a fruit pie / chocolate peanut butter pie is not a fruit pie. 
    Then, using string interpolation, console.log either 
    'the  __ pie is a fruit pie!' or 'the __ pie is not a fruit pie :('
 
*/

for (pie of pies) {
  if (
    pie.includes('apple') ||
    pie.includes('cherry') ||
    pie.includes('blueberry')
  ) {
    console.log(`${pie} pie is a fruit pie`);
  } else {
    console.log(`${pie} pie is not a fruit pie :()`);
  }
}

/*
    Platinum:
    In the same console.log of Gold challenge, add an index of the fruit pie to be displayed. The output should look like this: 'the  __ pie at __ index is a fruit pie!' or 'the __ pie at __ index is not a fruit pie :('. While you are at it, make the first letter of the fruit pie into upper case.
​
    - Use google to search for an array method that checks indices of an array
*/

for (index in pies) {
  if (
    pies[index].includes('apple') ||
    pies[index].includes('cherry') ||
    pies[index].includes('blueberry')
  ) {
    console.log(
      `${
        pies[index].charAt(0).toUpperCase() + pies[index].slice(1)
      } pie at ${index} index is a fruit pie!`
    );
  } else {
    console.log(
      `${
        pies[index].charAt(0).toUpperCase() + pies[index].slice(1)
      } pie at ${index} index is not a fruit pie :(`
    );
  }
}
