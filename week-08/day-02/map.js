'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.

let eCounter = function(fruit) {
    let counter = 0;
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "e") {
            counter++;
        }
    }
    return counter;
}


let kecske = fruits.map(eCounter)

console.log(kecske)