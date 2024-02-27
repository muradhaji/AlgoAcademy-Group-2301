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

function sum(a, b) {
	let result = a + b;
	return result;
}

function fullName(fname, lname) {
	return `${fname} ${lname}`;
}
alert(fullName("John", "Doe"));

alert(sum(sum(1, 2), sum(3, 4)))