const STAR_WARS_API = 'https://swapi.dev/api/people';
let starWarsPeopleList = document.querySelector('ul');

fetch(STAR_WARS_API)
  .then((response) => response.json())
  .then((json) => {
    const people = json.results;

    for (p of people) {
      let listItem = document.createElement('li');
      listItem.innerHTML = `<p>${p.name}</p>`;
      starWarsPeopleList.appendChild(listItem);
    }
  });
