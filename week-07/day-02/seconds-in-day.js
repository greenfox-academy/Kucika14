'use strict';

var currentHours = 14;
var currentMinutes = 34;
var currentSeconds = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables


let allSec = 24*60*60;
let pastSec = ((14*60*60) + (34*60) + 42);
console.log(allSec % pastSec + ' seconds remaining from the day!');