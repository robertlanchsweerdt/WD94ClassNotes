const someText = document.getElementsByClassName('some-text');

[...someText].forEach((text) => {
  text.style.color = 'blue';
});
