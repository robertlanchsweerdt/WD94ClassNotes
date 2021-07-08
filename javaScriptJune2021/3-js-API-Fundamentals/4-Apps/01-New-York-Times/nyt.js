const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'vKSNgGU04qcWjxQNneozZWjWXUAhPiw9';
let url;

// SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

// INITIAL
nav.style.display = 'none';
let pageNumber = 0;
let displayNav = false;

// EVENT LISTENERS
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

//FUNCTIONS
function fetchResults(e) {
  e.preventDefault();
  console.log('hello');
  url = `${baseURL}?q=${searchTerm.value}&api-key=${key}&page=${pageNumber}`;
  console.log(url);

  //CONDITIONAL FOR START AND END DATES
  if (startDate.value !== '') {
    console.log(startDate.value);
    url += `&begin_date=${startDate.value}`;
    console.log(`Start Date added: ${url}`);
  }

  if (endDate.value !== '') {
    console.log(endDate.value);
    url += `&end_date=${endDate.value}`;
  }

  console.log(url);

  // FETCHING OUR NYT SEARCH
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayResults(data))
    .catch((err) => console.error(err));
}

function displayResults(data) {
  // clear screen
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  const articles = data.response.docs;
  console.log(articles);

  // activate pagination if results are more than 10
  if (articles.length >= 10) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }

  // display results on page
  if (articles.length === 0) {
    console.log('no results');
  } else {
    console.log(articles);
    for (let i = 0; i < articles.length; i++) {
      const article = document.createElement('article');
      const heading = document.createElement('h2');
      const link = document.createElement('a');
      const para = document.createElement('p');
      const clearfix = document.createElement('div');

      let current = articles[i];
      console.log(`Current: ${current}`);

      link.href = current.web_url;
      link.textContent = current.headline.main;

      para.textContent = 'Keywords: ';

      for (let j = 0; j < current.keywords.length; j++) {
        const span = document.createElement('span');
        span.textContent += current.keywords[j].value + ' ';
        para.appendChild(span);
      }

      clearfix.setAttribute('class', 'clearfix');

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(para);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }
}

function nextPage() {
  console.log('Next button clicked');
}

function previousPage() {
  console.log('Next button clicked');
}
