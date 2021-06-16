// Equality Comparison Operator
// compares value but not data type
// victim of explicit coercion

console.log('3' == 3);
console.log(4 == 4);
console.log('3' == 4);

// Strict Equality Comparison Operator
// compares value AND data type

console.log(3 === 3);
console.log(3 === '3');

// Not equal comparison operator
console.log('3' != 4);
console.log('3' != 3);

// Strict not equal comparison operator
// uses one bang and double equal to strictly compare value and data type
console.log('3' !== 3);

// greater than
console.log(3 > 2);

// less than
console.log(2 < 3);

// greater than or equal to
console.log(3 >= 3);

// less than or equal to
console.log(3 >= 2);

// AND comparison operator ( && )
// both expressions on either side must be true
// three logical decisions being made
console.log(1 < 2 && 3 > 0);

// OR comparison operator ( || )
// only need one expression on either side of the operator to be true
console.log(1 < 2 || 3 > 4);
