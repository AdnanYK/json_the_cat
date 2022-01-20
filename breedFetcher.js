const breed = process.argv[2];

const request = require('request');

const URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;


request(URL, (error, response, body) => {

  

  if (error === null) {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    const result = JSON.parse(body)
    if (result.length === 0) {
      console.log('invalid search word');
    } else {
      for (let i in result) {
        if (result[i].name !== undefined) {
          console.log(`result #${i} name:`, result[i].name); // Print the HTML for the Google homepage.
          console.log('description:', result[i].description); // Print the HTML for the Google homepage.
        }
      }
    }

  } else {
    console.log('error:', error); // Print the error if one occurred
  }
  
});



// const breedDescription = fetchBreedDescription('Siberian', (error, description) => {

// });