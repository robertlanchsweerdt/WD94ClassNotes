const presidents = [
  { first: 'George', last: 'Washington', year: 1732, passed: 1799 },
  { first: 'John', last: 'Adams', year: 1735, passed: 1826 },
  { first: 'Thomas', last: 'Jefferson', year: 1743, passed: 1826 },
  { first: 'James', last: 'Madison', year: 1751, passed: 1836 },
  { first: 'James', last: 'Monroe', year: 1758, passed: 1831 },
  { first: 'John', last: 'Adams', year: 1767, passed: 1848 },
  { first: 'Andrew', last: 'Jackson', year: 1767, passed: 1845 },
  { first: 'Martin', last: 'Van Buren', year: 1782, passed: 1862 },
  { first: 'William', last: 'Harrison', year: 1773, passed: 1841 },
  { first: 'John', last: 'Tyler', year: 1790, passed: 1862 },
  { first: 'James', last: 'Polk', year: 1795, passed: 1849 },
  { first: 'Zachary', last: 'Taylor', year: 1784, passed: 1850 },
  { first: 'Millard', last: 'Fillmore', year: 1800, passed: 1874 },
  { first: 'Franklin', last: 'Pierce', year: 1804, passed: 1869 },
  { first: 'James', last: 'Buchanan', year: 1791, passed: 1868 },
  { first: 'Abraham', last: 'Lincoln', year: 1809, passed: 1865 },
  { first: 'Andrew', last: 'Johnson', year: 1808, passed: 1875 },
  { first: 'Ulysses', last: 'Grant', year: 1822, passed: 1885 },
  { first: 'Rutherford', last: 'Hayes', year: 1822, passed: 1893 },
  { first: 'James', last: 'Garfield', year: 1831, passed: 1881 },
  { first: 'Chester', last: 'Arthur', year: 1829, passed: 1886 },
  { first: 'Grover', last: 'Cleveland', year: 1837, passed: 1908 },
  { first: 'Benjamin', last: 'Harrison', year: 1833, passed: 1901 },
  { first: 'William', last: 'McKinley', year: 1843, passed: 1901 },
  { first: 'Theodore', last: 'Roosevelt', year: 1858, passed: 1919 },
  { first: 'William', last: 'Taft', year: 1857, passed: 1930 },
  { first: 'Woodrow', last: 'Wilson', year: 1856, passed: 1924 },
  { first: 'Warren', last: 'Harding', year: 1865, passed: 1923 },
  { first: 'Calvin', last: 'Coolidge', year: 1872, passed: 1933 },
  { first: 'Herbert', last: 'Hoover', year: 1874, passed: 1964 },
  { first: 'Franklin', last: 'Roosevelt', year: 1882, passed: 1945 },
  { first: 'Harry', last: 'Truman', year: 1884, passed: 1972 },
  { first: 'Dwight', last: 'Eisenhower', year: 1890, passed: 1969 },
  { first: 'John', last: 'Kennedy', year: 1917, passed: 1963 },
  { first: 'Lyndon', last: 'Johnson', year: 1908, passed: 1973 },
  { first: 'Richard', last: 'Nixon', year: 1913, passed: 1994 },
  { first: 'Gerald', last: 'Ford', year: 1913, passed: 2006 },
  { first: 'Jimmy', last: 'Carter', year: 1924, passed: undefined },
  { first: 'Ronald', last: 'Reagan', year: 1911, passed: 2004 },
  { first: 'George', last: 'Bush', year: 1924, passed: 2018 },
  { first: 'Bill', last: 'Clinton', year: 1946, passed: undefined },
  { first: 'George', last: 'Bush', year: 1946, passed: undefined },
  { first: 'Barack', last: 'Obama', year: 1961, passed: undefined },
  { first: 'Donald', last: 'Trump', year: 1946, passed: undefined },
  { first: 'Joseph', last: 'Biden', year: 1942, passed: undefined },
];

//Bronze: Build a for-loop that will loop through the array and console log the first and last name of every president

presidents.forEach((president) => {
  console.log(president.first, president.last);
});

//Silver: Only console log it if the president is alive

presidents.forEach((president) => {
  if (president.passed == undefined) {
    console.log(president.first, president.last);
  }
});

/*
Gold:
    Convert the if statement to a ternary.
 
    Using array methods, add a new object element to the end of the array and a new object element to the beginning of the array. Both of these new objects can contain fabricated data.
*/

presidents.forEach((president) => {
  president.passed == undefined
    ? console.log(president.first, president.last)
    : console.log(
        `This president is no longer alive: ${
          (president.first, president.last)
        }`
      );
});

presidents.push({
  first: 'Johnny',
  last: 'Bravo',
  year: 1973,
  passed: undefined,
});

presidents.unshift({
  first: 'Father',
  last: 'Time',
  year: 'beginning of time',
  passed: undefined,
});

console.log(presidents);

console.log(presidents[0]);

//Platinum: Create a new variable called filteredPresidents and use a  filter method to loop through the array

const filterPresidents = presidents.filter((president) => {
  const firstInitialLastName = president.last.split('')[0];
  if (firstInitialLastName === 'B') {
    return president;
  }
});

filterPresidents.forEach((filter) => {
  console.log(filter.first, filter.last);
});

// refactoring the previous

const filterPresidentsNew = presidents.filter(
  (president) => president.last[0] == 'B'
);
console.log(filterPresidentsNew);

/*
Sort Challenge:
Using the sort method, sort the presidents array by the year property in ascending order
*/

const ascendingYears = presidents.sort((a, b) => {
  return a.year - b.year;
});

console.log(ascendingYears);

/*
Adding Properties:
Loop through the presidents array and add a "deceased" property to each president object. If the president is still alive, then set the value to false and if not, set the value to true. 
*/

presidents.forEach((president) => {
  if (president.passed == undefined) {
    president.deceased = false;
  } else {
    president.deceased = true;
  }
});

console.log(presidents);
