const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

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
const section = document.querySelector('section');

// INITIAL
nav.style.display = 'none';
let pageNumber = 0;

// EVENT LISTENERS
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

//FUNCTIONS
function fetchResults(e) {
  e.preventDefault();
  url = `${baseURL}?q=${searchTerm.value}&fq=document_type:("article")&api-key=${key}&page=${pageNumber}`;

  //CONDITIONAL FOR START AND END DATES
  if (startDate.value !== '') {
    url += `&begin_date=${startDate.value}`;
  }

  if (endDate.value !== '') {
    url += `&end_date=${endDate.value}`;
  }

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

  // activate pagination
  // if on page 0 with articles, then only show the next button
  if (articles.length === 10 && pageNumber < 1) {
    nav.style.display = 'block';
    previousBtn.style.visibility = 'hidden';
    // if on page 1 or more, then show the previous button
  } else if (articles.length !== 10 && pageNumber > 0) {
    nextBtn.style.visibility = 'hidden';
  } else if (pageNumber > 0) {
    previousBtn.style.visibility = 'initial';
    nextBtn.style.visibility = 'initial';
  } else {
    // if no articles and not on a page 1 or more, then hide nav
    nav.style.display = 'none;';
  }

  // display results on page
  if (articles.length === 0) {
    console.log('no results');
  } else {
    for (let i = 0; i < articles.length; i++) {
      const article = document.createElement('article');
      const heading = document.createElement('h2');
      const link = document.createElement('a');
      const img = document.createElement('img');
      const para = document.createElement('p');
      const clearfix = document.createElement('div');

      let current = articles[i];

      link.href = current.web_url;

      link.textContent = current.headline.main;

      para.textContent = 'Keywords: ';

      // loop through keywords for each article
      for (let j = 0; j < current.keywords.length; j++) {
        const span = document.createElement('span');
        span.textContent += current.keywords[j].value + ' ';
        para.appendChild(span);
      }

      // display image for each article
      if (current.multimedia.length > 0) {
        img.src = `http://www.nytimes.com/${current.multimedia[0].url} `;
        img.alt = current.headline.main;
      }

      clearfix.setAttribute('class', 'clearfix');

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }
}

function nextPage(e) {
  pageNumber++;
  fetchResults(e);
}

function previousPage(e) {
  if (pageNumber > 0) {
    pageNumber--;
  } else {
    return;
  }

  fetchResults(e);
}
