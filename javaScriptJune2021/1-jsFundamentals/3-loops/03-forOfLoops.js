/**
 * FOR OF LOOPS
 *
 *  requires your object needs to be iterable --- that means it needs to be ordered / numbered;
 *  Arrays are ordered / numbered so they work with FOR OF loops
 *  FOR OF returns the value where FOR IN returns the object key or array position number
 *
 */

let student = {
  name: 'Peter',
  awesome: true,
  degree: 'javascript',
  week: 1,
};

let dogArr = ['boxer', 'beagle', 'labrador', 'puggle'];

for (dog of dogArr) {
  console.log(dog);
}
