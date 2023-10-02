const request = require("request");

const breedDetailsFromAPI = function (breed, callback) {
  // Define the API endpoint URL with the breed name
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  // Make a GET request to the API endpoint
  request(apiUrl, (error, response, body) => {
    console.log("API Request: Calling TheCatAPI...");

    if (error) {
      // Handle request errors
      callback(null, error);
    } else {
      if (response.statusCode === 200) {
        // Parse the JSON response body
        const data = JSON.parse(body);
        if (data.length === 0) {
          callback(null, "Breed not found.");
        } else {
          // Pass the breed data to the callback
          callback(data[0], null);
        }
      } else {
        // Handle non-200 HTTP status codes
        callback(null, `HTTP Status Code: ${response.statusCode}`);
      }
    }
  });
};

// Use the callback to work with the data or handle errors
breedDetailsFromAPI("Bombay", (data, error) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Return Value:", data);
  }
});
