const UNSPLASH_API = 'https://source.unsplash.com/random';
const randomImage = document.querySelector('.random-image');

fetch(UNSPLASH_API).then((response) => {
  if (!response.ok) {
    console.log(response);
    return new Error(response);
  }
  console.log('Response:', response);
  return response.blob().then((photoBlob) => {
    console.log('My Blob:', photoBlob);
    const objectURL = URL.createObjectURL(photoBlob);
    console.log('Object URL:', objectURL);
    randomImage.src = objectURL;
    console.log('randomImage.src:', randomImage.src);
  });
});
