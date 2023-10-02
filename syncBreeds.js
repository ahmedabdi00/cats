const fs = require("fs");
const path = require("path");

// Define the path to the data folder
const dataFolderPath = path.join(__dirname, "data");

// synchronous function to fetch a cat breed from a file
const breedDetailsFromFile = function (breed) {
  try {
    // Read the data from the corresponding file
    const filePath = path.join(dataFolderPath, `${breed}.txt`);
    const data = require(filePath);

    // Check if the data object has the breed as a key
    if (data.hasOwnProperty(breed)) {
      return data[breed];
    } else {
      return null; // Breed not found in the data file
    }
  } catch (error) {
    // Handle errors, e.g., if the file doesn't exist
    return null;
  }
};

// Get the return value right away from the function
const bombay = breedDetailsFromFile("Bombay");
console.log(bombay);

const balinese = breedDetailsFromFile("Balinese");
console.log(balinese);
