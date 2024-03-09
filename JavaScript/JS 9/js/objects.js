// let user = new Object();

// let user = {};

// user.name = 'John';
// user.age = 27;
// user.isAdmin = true;

// let user = {
//   name: 'John',
//   'last name': 'Doe',
//   age: 27,
//   isAdmin: true,
// };

// delete user.isAdmin;

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.isAdmin);
// console.log(user['last name']);
// if (user.height) {
//   console.log(user.height);
// }

// x = 5;
// delete x;
// console.log(x);

// let user = {};

// user['name'] = 'John';

// let key = 'age';
// user[key] = 27;
// user.key = 27; // wrong

// let key = prompt('Enter object key:');
// let value = prompt('Enter key value:');

// user[key] = value;
// user.key = value;
// user['fullname'] = 'doe';

// let user = {
//   // [key]: value,
//   key: value,
// };

// console.log(user);

// function createUser(name, age, isAdmin = false) {
//   // let newUser = {
//   //   name: name,
//   //   age: age,
//   // };
//   // return newUser;

//   // return {
//   //   name: name,
//   //   age: age,
//   // };

//   return {
//     name,
//     age,
//   };
// }

// // let user = { name: 'John', age: 27 };
// // let user2 = { name: 'Mike', age: 42 };

// let user = createUser('John', 27);
// let user2 = createUser('Mike', 42);
// let user3 = createUser('Jane', 30, true);

// console.log(user);
// console.log(user2);
// console.log(user3);

// let name = prompt('Enter user name:');

// let userx = {
//   name,
// };

// console.log(userx);

// let user = { name: 'John', age: 27, height: undefined };

// console.log(user.height === undefined ? 'No' : 'Yes');

// console.log('height' in user);

// for (x in user) {
//   console.log(`${x} -> ${user[x]}`);
// }

// name -> John
// age -> 27
// height -> undefined

// let codes = {
//   // 90: 'Turkey',
//   // 49: 'Germany',
//   // 994: 'Azerbaijan',
//   // 41: 'Switzerland',
//   // 1: 'USA',
//   '.90': 'Turkey',
//   '+49': 'Germany',
//   '-994': 'Azerbaijan',
//   '+41': 'Switzerland',
//   '+1': 'USA',
//   name: 'John',
//   age: 28,
// };

// console.log(codes);

// for (code in codes) {
//   console.log(code);
// }

// let sayNameFunc = function () {
//   console.log(`Hello my name is ${this.name}, i am ${this.age} years old.`);
// };
// let sayNameFunc = () => {
//   console.log(`Hello my name is ${this.name}, i am ${this.age} years old.`);
// };

// let user = {
//   name: 'John',
//   age: 27,
//   sayName: function () {
//     console.log(`Hello my name is ${this.name}, i am ${this.age} years old.`);
//   },
//   // sayName: () => {
//   //   console.log(`Hello my name is ${this.name}, i am ${this.age} years old.`);
//   // },
//   // sayName: sayNameFunc,
// };

// user.sayName();

// let myMath = {
//   PI: 3.14,
//   pow: function (x, y) {
//     return x ** y;
//   },
//   circle: function (r) {
//     return 2 * this.PI * r;
//   },
//   root: function (x, y) {
//     return this.pow(x, 1 / y);
//   },
//   abs: function (x) {
//     return x < 0 ? x * -1 : x;
//   },
//   circleArea: function (r) {
//     return this.PI * this.pow(r, 2);
//   },
// };

// let usr1 = { name: 'John', age: 27 };
// let usr2 = { name: 'Mike', age: 42 };
// let usr3 = { name: 'Jane', age: 34 };
// let arr = [usr1, usr2, usr3];

// let arr = [];

// for (i = 0; i < 10; i++) {
//   arr[i] = `${i}th element`;
// }

// console.log(arr);

// 1-10
// {sum: i + i, multiple: i * i }
// {sum: 2, multiple: 1}
// {sum: 4, multiple: 4}
// {sum: 6, multiple: 9}
// {sum: 8, multiple: 16}
