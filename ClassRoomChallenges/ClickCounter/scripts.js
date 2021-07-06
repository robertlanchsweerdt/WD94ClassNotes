// SET-UP VARIABLES
const teamOnePoints = document.getElementById('team1points');
const teamTwoPoints = document.getElementById('team2points');
const teamOneAddButton = document.getElementById('teamOneAddButton');
const teamTwoAddButton = document.getElementById('teamTwoAddButton');

// INVOKE FUNCTIONS
initializePoints();

// BUTTON EVENT LISTENERS
teamOneAddButton.addEventListener('click', teamOneAdd);
teamTwoAddButton.addEventListener('click', teamTwoAdd);

// FUNCTIONS

function initializePoints() {
  teamOnePoints.textContent = '0';
  teamTwoPoints.textContent = '0';
}

function teamOneAdd() {
  let points = Number(teamOnePoints.innerText);
  points += 1;
  teamOnePoints.innerText = points;
}

function teamOneSub() {
  let points = Number(teamOnePoints.innerText);
  points -= 1;
  teamOnePoints.innerText = points;
}

function teamTwoAdd() {
  let points = Number(teamTwoPoints.innerText);
  points += 1;
  teamTwoPoints.innerText = points;
}

function teamTwoSub() {
  let points = Number(teamTwoPoints.innerText);
  points -= 1;
  teamTwoPoints.innerText = points;
}
