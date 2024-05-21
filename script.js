"use strict";
// დავალება 1

function getSum(...numbers) {
  let sum = 0;
  for (num of numbers) {
    sum += num;
  }
  return sum;
}

let result = getSum(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result);

// დავალება 2

let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};

let logginedUserName = function () {
  user.isloggedin === true
    ? console.log(`${user.firstname} ${user.lastname}`)
    : console.log(false);
};
logginedUserName();

// დავალება 3

let getMaxNumber = (...numbers) => {
  console.log(Math.max(...numbers));
};
getMaxNumber(10, 50, 6, 7, 8, 11, 6, 3, 9);

// დავალება 4

let evenOrOdd = (number) =>
  number % 2 === 0
    ? console.log("this number is even")
    : console.log("this number is odd");

evenOrOdd(1998);

// დავალება 5
let array = [1, 2, 3, 4, 5];
let reversedArray = [];
for (let i = array.length - 1; i >= 0; i--) {
  reversedArray.push(array[i]);
}
console.log(reversedArray);

// დავალება 6

let ageCheker = (year) => {
  let age = 2024 - year;
  age > 18 ? console.log("სრულწლოვანი") : console.log("არასრულწლოვანი");
};

ageCheker(1998);
