// function name(parameter1, parameter1 ... parameterN) {
// 		body
// }

// function sayHi() {
// 	alert(`Hello friend!`);
// }
// sayHi();

// function sayHi(userName) {
// 	alert(`Hello ${userName}!`);
// }
// sayHi("John");

// let firstname = "John";
// sayHi(firstname);

// function showMessage(user, message) {
// 	alert(`${user} says: ${message}`)
// }
// showMessage("John", "Hello Mike!");

// let person1 = "John";
// let person1Message = "Hello Mike!";
// showMessage(person1, person1Message);
// showMessage(person1Message, person1);

// function sum(a, b) {
// 	let result = a + b;
// 	alert(result);
// }

// let num1 = Number(prompt("A"));
// let num2 = Number(prompt("B"));

// // sum(8, 5);
// sum(num1, num2);

// function sum() {
// 	let num1 = Number(prompt("A"));
// 	let num2 = Number(prompt("B"));
// 	let result = num1 + num2;
// 	alert(result);
// }

// sum();

// function isCorrect(cond) {
// 	if(cond == true) {
// 		alert("Correct!");
// 	} else {
// 		alert("Wrong!");
// 	}
// }

// isCorrect(4 < 5);

// let result;
// function sum(a, b) {
// 	let result = a + b;
// 	alert(result);
// }

// sum(5, 8);
// console.log(result);

// function sum(a = 1, b = 2) {
// 	let result = a + b;
// 	alert(result);
// }

// function sum(a, b = 1) {
// 	// Method 1
// 	// if(a === undefined) {
// 	// 	a = 1;
// 	// }

// 	// Method 2
// 	// a = (a === undefined) ? 1 : a;

// 	// Method 3
// 	// a = a ?? 1;

// 	let result = a + b;
// 	alert(result);
// }

// sum();
// sum(7);
// sum(undefined, 3);
// sum(8, 5);

// function showMessage(user, message = "No message") {
// 	alert(`${user} says: ${message}`)
// }
// showMessage("John");

// function sum(a, b) {
// 	let result = a + b;
// 	return result;
// }

// function fullName(fname, lname) {
// 	return `${fname} ${lname}`;
// }
// alert(fullName("John", "Doe"));

// alert(sum(sum(1, 2), sum(3, 4)))

// Function Declaration
// function sum(a = 0, b = 0) {
//   return a + b;
// }

// Function Expression
// let sum = function (a = 0, b = 0) {
//   return a + b;
// };

// Arrow Function
// let sum = (a = 0, b = 0) => {
//   return a + b;
// };
// let sum = (a = 0, b = 0) => a + b;
// let double = a => a * 2;
// let createString = () => 'Hello ' + 'friend';

// console.log(sum(sum(3, 5), sum(2, 3)));
// console.log(double(3));
// console.log(createString());
// console.log(createString());

// let result;

// let sum = (a = 0, b = 0) => {
//   let result = a + b;
//   return result;
// };

// console.log(sum(8, 5));
// console.log(result);

// 'use strict';
// let age = 17;

// function showMessage1() {
//   if (age < 18) {
//     console.log('Not allowed');
//   } else {
//     console.log('Allowed');
//   }
// }

// let showMessage2 = function () {
//   if (age < 18) {
//     console.log('Not allowed');
//   } else {
//     console.log('Allowed');
//   }
// };

// if (age < 18) {
//   function showMessage1() {
//     console.log('Not allowed');
//   }
// } else {
//   function showMessage1() {
//     console.log('Allowed');
//   }
// }

// let showMessage2;
// if (age < 18) {
//   showMessage2 = function () {
//     console.log('Not allowed');
//   };
// } else {
//   showMessage2 = function () {
//     console.log('Allowed');
//   };
// }

// showMessage1();
// showMessage2();

// console.log(Math.sqrt(9));
// console.log(myRoot(9, 2));
// console.log(myRoot(27, 3));
// console.log(myRoot(16, 4));
// console.log(myRoot(10, 2));

// console.log(Math.floor(Math.random() * 10));

// let okfunc = () => {
//   alert('You have selected ok');
// };
// let cancelfunc = (x) => {
//   alert(`${x} You have selected cancel`);
// };

// let copyfunc = cancelfunc;

// let callBack = (f) => {
//   f(5);
// };

// callBack(cancelfunc);

// callBack((z) => {
//   console.log(z);
// });

// let sum = (a, b, f) => {
//   let result = a + b;
//   f(result);
// };

// sum(8, 5, (res) => {
//   sum(res, 7, (res2) => {
//     console.log(res2);
//   });
// });

// sum(8, 5, (x) => {
//   console.log(x);
// });

// Reverse function
// Input N = 35276
// Output 67253
// Input N = 1234
// Output 4321
// Input N = 1221
// Output 1221

let n = Number(prompt('Enter number: '));

// function reverse(num) {
//   let ans = '';
//   for (let i = num.length - 1; i >= 0; i--) {
//     ans += num[i];
//   }
//   return ans;
// }

function reverse(num) {
  let ans = 0;
  while (num > 0) {
    ans = ans * 10 + (num % 10);
    num = (num - (num % 10)) / 10;
  }
  return ans;
}

console.log(reverse(123));
console.log(reverse(65432));

// Tekrar
// Reverse
// Polindrome
