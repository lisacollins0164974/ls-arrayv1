const _ = require('lodash');

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Function to shuffle an array
function shuffleArray(array) {
  return _.shuffle(array);
}

// Function to generate a random integer within a range
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  reverseString,
  shuffleArray,
  randomInteger
};

