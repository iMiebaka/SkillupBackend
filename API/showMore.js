// This is the root url for the Rest API
const baseUrl = "https://hacker-news.firebaseio.com/v0";
// This url makes sure the result is returned in JSON
const newStoriesUrl = `${baseUrl}/topstories.json`;
const itemUrl = `${baseUrl}/item/`;


const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

fetch(newStoriesUrl, options)
  .then((response) => response.json())
  .then((idResult) => {
    // Iterate through the first 50 top news
    for (let index = 0; index < 50; index++) {
      // Create an id from the current iterated value
      const id = idResult[index];
      // Passing the id to the fetch API
      fetch(itemUrl + id + ".json", options)
        .then((response) => response.json())
        .then((newsResult) => {
          // Creating a place holder variable created element
          let placeholder = undefined;
          // Creating the title for h1
          placeholder = document.createElement("h1");
          // adding the API result for title
          placeholder.innerText = newsResult.title;
          // Appending the title to h1
          document.body.appendChild(placeholder);

          placeholder = document.createElement("h2");
          // adding the API result for author
          placeholder.innerText = newsResult.by;
          // Appending the author to h2
          document.body.appendChild(placeholder);

          placeholder = document.createElement("h3");
          // adding the API result for type to h3
          placeholder.innerText = newsResult.type;
          // Appending the type to h3
          document.body.appendChild(placeholder);

          placeholder = document.createElement("a");
          // adding the API result url to a tag innerHTML
          placeholder.innerText = newsResult.url;
          // adding the API result url to a tag href
          placeholder.href = newsResult.url;
          // Appending the url to a tag
          document.body.appendChild(placeholder);
        })
        .catch((err) => console.error(err));
    }
  })
  .catch((err) => console.error(err));
