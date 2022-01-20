// index.js
const { fetchBreedDescription } = require('./breedFetcher');

const breed = process.argv[2];

fetchBreedDescription(breed, (error, name, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log('name: ', name);
    console.log('description:', description);
  }
});