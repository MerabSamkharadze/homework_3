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
  if (user.isloggedin) {
    return `${user.firstname} ${user.lastname}`;
  }
  return false;
};
let result2 = logginedUserName();
console.log(result2);

// დავალება 3

let getMaxNumber = (...numbers) => {
  return Math.max(...numbers);
};
let result3 = getMaxNumber(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result3);

// დავალება 4

let evenOrOdd = (number) =>
  number % 2 === 0 ? "this number is even" : "this number is odd";

let result4 = evenOrOdd(1998);
console.log(result4);

// დავალება 5
// way 1
let array = [1, 2, 3, 4, 5];
let reversedArray = [];
for (let i = array.length - 1; i >= 0; i--) {
  reversedArray.push(array[i]);
}
console.log(reversedArray);

//way 2
// let array1 = [1, 2, 3, 4, 5];
// let reversedArray2 = [];
// for (let num of array1) {
//   reversedArray2.unshift(num);
// }
// console.log(reversedArray2);

// დავალება 6

let ageCheker = (year) => {
  let age = 2024 - year;
  age > 18 ? console.log("სრულწლოვანი") : console.log("არასრულწლოვანი");
};

ageCheker(1998);
