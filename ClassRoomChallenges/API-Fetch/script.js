// VARIABLES
const CHUCK_NORRIS_API = 'https://api.chucknorris.io/jokes/random';
const displayFetch = document.getElementById('display-fetch');
const btn = document.getElementById('button-fetch');

// BUTTON LISTENER
btn.addEventListener('click', getJokeAsync);

function getJoke() {
  fetch(CHUCK_NORRIS_API) // fetch is a promise that will return a resolve or reject
    .then((resp) => resp.json()) // .then() captures the returned promise from fetch
    .then((data) => console.log(`.then() returns:`, data)) // .then() captures the .json() promise returned
    .catch((err) => console.error(err));
}

getJoke();

async function getJokeAsync() {
  try {
    const resp = await fetch(CHUCK_NORRIS_API);
    const data = await resp.json();
    console.log(`Async returns:`, data);
    displayJoke(data.value);
  } catch (err) {
    console.error(err);
  }
}

// DISPLAY JOKE ON PAGE
function displayJoke(joke) {
  //CHECK IF P VARIABLE EXISTS
  if (displayFetch.firstElementChild) {
    // IF EXISTS, THEN REMOVE SO ONLY 1 JOKE IS SHOWN ON PAGE
    displayFetch.firstElementChild.remove();
  }

  // CREATE P TAG, ADD JOKE TO P TAG, AND APPEND TO DIV
  const p = document.createElement('p');
  p.textContent = joke;
  displayFetch.appendChild(p);
}
