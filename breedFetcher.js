const breed = process.argv[2];

const request = require('request');

const URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;


request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body.length);
  const result = JSON.parse(body)
  if (result.length === 0) {
    console.log('invalid search word');
  } else {
    for (let i in result) {
      console.log(`result #${i} name:`, result[i].name); // Print the HTML for the Google homepage.
      console.log('description:', result[i].description); // Print the HTML for the Google homepage.
    }
  }
});
  