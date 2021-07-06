// SET-UP VARIABLES
const teamOnePoints = document.getElementById('team1points');
const teamTwoPoints = document.getElementById('team2points');
const teamOneAddButton = document.getElementById('teamOneAddButton');
const teamTwoAddButton = document.getElementById('teamTwoAddButton');
const teamOneSubButton = document.getElementById('teamOneSubButton');
const teamTwoSubButton = document.getElementById('teamTwoSubButton');
const winner = document.getElementById('winner');

// INVOKE FUNCTIONS
initializePoints();

// BUTTON EVENT LISTENERS
teamOneAddButton.addEventListener('click', teamOneAdd);
teamTwoAddButton.addEventListener('click', teamTwoAdd);

// FUNCTIONS

function initializePoints() {
  teamOnePoints.textContent = '0';
  teamTwoPoints.textContent = '0';

  teamOneAddButton.style.backgroundColor = '#0d6efd';
  teamTwoAddButton.style.backgroundColor = '#0d6efd';
  teamOneSubButton.style.backgroundColor = '#0d6efd';
  teamTwoSubButton.style.backgroundColor = '#0d6efd';
}

function teamOneAdd() {
  let points = Number(teamOnePoints.innerText);
  points += 1;
  teamOnePoints.innerText = points;

  console.log(teamOneAddButton.style.backgroundColor);

  if (teamOneAddButton.style.backgroundColor !== 'green') {
    teamOneAddButton.style.backgroundColor = 'green';
  } else {
    teamOneAddButton.style.backgroundColor = 'blue';
  }
}

function teamOneSub() {
  let points = Number(teamOnePoints.innerText);
  points -= 1;
  if (points >= 0) teamOnePoints.innerText = points;

  if (teamOneSubButton.style.backgroundColor !== 'red') {
    teamOneSubButton.style.backgroundColor = 'red';
  } else {
    teamOneSubButton.style.backgroundColor = 'blue';
  }
}

function teamTwoAdd() {
  let points = Number(teamTwoPoints.innerText);
  points += 1;
  teamTwoPoints.innerText = points;

  if (teamTwoAddButton.style.backgroundColor !== 'green') {
    teamTwoAddButton.style.backgroundColor = 'green';
  } else {
    teamTwoAddButton.style.backgroundColor = 'blue';
  }
}

function teamTwoSub() {
  let points = Number(teamTwoPoints.innerText);
  points -= 1;
  if (points >= 0) teamTwoPoints.innerText = points;

  if (teamTwoSubButton.style.backgroundColor !== 'red') {
    teamTwoSubButton.style.backgroundColor = 'red';
  } else {
    teamTwoSubButton.style.backgroundColor = 'blue';
  }
}

function theWinner() {
  console.log('determine winner');
  if (teamTwoPoints.innerText > teamOnePoints.innerText) {
    winner.textContent = `Congratulations Team Two for winning by ${
      teamTwoPoints.innerText - teamOnePoints.innerText
    } points`;
  } else if (teamTwoPoints.innerText < teamOnePoints.innerText) {
    winner.textContent = `Congratulations Team One for winning by ${
      teamOnePoints.innerText - teamTwoPoints.innerText
    } points`;
  } else {
    winner.textContent = `Team scores are tied.  There is no winner.`;
  }
}

/*
Using DOM Manipulation:
1. Add a conditional to both of the subtract functions to ensure there are no negative numbers
2. Have the add button alternate between green and blue after each click, then have the subtract button alternate between red and blue
3. Add a reset button in the html, then in the js file have it call upon the initializePoints function when clicked. 
4. Add a Determine Winner button and an empty p tag to the html, then in the js file create a function that will compare the points between the two teams and fill in the empty p tag to say "Congradulations to [team] for winning by [score differential]". When the Determine Winner button is clicked, it should invoke this new function. 
*/
