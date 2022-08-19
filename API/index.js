// This is the root url for the Rest API
const baseUrl = "https://hacker-news.firebaseio.com/v0";
// This url makes sure the result is returned in JSON
const newStoriesUrl = `${baseUrl}/topstories.json`;
const itemUrl = `${baseUrl}/item/`;

// This is a config object for the fetch function
const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

//   This request get the first 500 request
fetch(newStoriesUrl, options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));


//   This fetch get the post with an ID of 32494485
fetch(itemUrl + "32494485" + ".json", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));


  
// Assignment
/*
Make an app that goes to 
https://catfact.ninja/fact
Let the fetch it go to the API every 5 seconds, get a fact and append it to p tag on the html
*/ 