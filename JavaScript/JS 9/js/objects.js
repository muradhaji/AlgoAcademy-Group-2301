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

// let arr = [];

// for (let i = 0; i <= 10; i++) {
//   arr[i] = i * i;
// }

// console.log(arr);

// function testFunc() {
//   console.log(this);
// }
// let testFunc = function () {
//   console.log(this);
// };
// let testFunc = () => {
//   console.log(this);
// };

// let testObj = {
//   name: 'John',
//   test: testFunc,
//   // test2: function () {},
//   test3: () => {},
// };

// testFunc();
// testObj.test();

// let arr = [
//   { name: 'John', age: 27 },
//   { name: 'Mike', age: 42 },
//   { name: 'Ross', age: 33 },
// ];

// let arrStr = JSON.stringify(arr);

// let arrParsed = JSON.parse(arrStr);

// console.log(arr);
// console.log(arrStr);
// console.log(arrParsed);

// function createUser(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let user = createUser('John', 27);
// let user2 = new User('Mike', 42);
// let user3 = new User('Ross', 33);

// console.log(user);
// console.log(user2);
// console.log(user3);

// let user = {
//   name: 'John',
//   age: 42,
//   univercity: {
//     name: 'BDU',
//     address: {
//       city: 'Baku',
//       street: 'Elmler',
//     },
//   },
//   test: () => {
//     console.log('Function worked');
//   },
// };

// console.log(user.height);
// console.log('height' in user);

// console.log(user.univercity.address.street);

// if (user.univercity) {
//   if (user.univercity.address) {
//     console.log(user.univercity.address.street);
//   } else {
//     console.log(undefined);
//   }
// } else {
//   console.log(undefined);
// }

// console.log(
//   user.univercity
//     ? user.univercity.address
//       ? user.univercity.address.street
//       : undefined
//     : undefined
// );

// console.log(user?.univercity?.address?.street);
// user.test?.();

// let user = {
//   name: 'John',
//   age: 42,
//   univercity: {
//     name: 'BDU',
//     address: {
//       city: 'Baku',
//       street: 'Elmler',
//     },
//   },
//   sayName: () => {
//     console.log(`Hi, my name is ${this.name}`);
//   },
// };

// let user2 = user;
// user2.name = 'Mike';
// user.age = 13;

// let user2 = {};
// user2.name = user.name;
// user2.age = user.age;
// user2.univercity = user.univercity;
// user2.sayName = user.sayName;

// for (key in user) {
//   user2[key] = user[key];
// }

// Object.assign(user2, user);

// let user2 = structuredClone(user);

// function createObjCopy(sourceObj) {
//   let newObj = {};
//   for (key in sourceObj) {
//     if (typeof sourceObj[key] === 'object') {
//       newObj[key] = createObjCopy(sourceObj[key]);
//     } else {
//       newObj[key] = sourceObj[key];
//     }
//   }
//   return newObj;
// }

// let user2 = createObjCopy(user);

/*
user2 = user XXX

user2.name = user.name
user2.age = user.age

user2.univercitry = user.univercity XXX
user2.univercitry.name = user.univercity.name

user2.univercitry.adress = user.univercity.adress XXX
user2.univercitry.adress.street = user.univercity.adress.street
user2.univercitry.adress.city = user.univercity.adress.city

*/

// user.age = 13;
// user2.name = 'Mike';
// user2.univercity.name = 'GDU';

// console.log(user);
// console.log(user2);

// let user = {
//   name: 'John',
//   age: 42,
//   univercity: {
//     name: 'BDU',
//     address: {
//       city: 'Baku',
//       street: 'Elmler',
//     },
//   },
//   sayName: () => {
//     console.log(`Hi, my name is ${this.name}`);
//   },
// };

// let user2 = {};
// Object.assign(user2, user);

// let user2 = Object.assign({}, user);
// user2.univercity = Object.assign({}, user.univercity);
// user2.univercity.address = Object.assign({}, user.univercity.address);

// user.name = 'Mike';
// user2.univercity.name = 'GDU';
// user2.univercity.address.city = 'Ganja';

// console.log(user);
// console.log(user2);

// let user = { name: 'John', age: 27, id: 13 };

// user.fid = 42;

// let x = 5;
// let y = 5;

// let id = Symbol('facebook id');
// let id2 = Symbol('facebook id');

// user[id] = 42;
// user[id2] = 84;

// console.log(user);
// console.log(user.id);
// console.log(user[id]);
// console.log(user[id2]);

// for (key in user) {
//   console.log(key);
// }

// console.log(Object.keys(user));

// let user = {
//   [Symbol.toPrimitive]: function (hint) {
//     if (hint == 'number') {
//       return this.age;
//     } else if (hint == 'string') {
//       return this.name;
//     }
//   },
//   test: function (hint) {
//     if (hint == 'number') {
//       return this.age;
//     } else if (hint == 'string') {
//       return this.name;
//     }
//   },
//   name: 'John',
//   age: 27,
// };

// console.log(String(user));
// console.log(Number(user));
// console.log(user - 5);
// console.log(user.test('string'));
// console.log(user.test('number'));

let arr = [
  { value: 200, count: 3 },
  { value: 100, count: 0 },
  { value: 50, count: 7 },
  { value: 20, count: 1 },
  { value: 10, count: 0 },
  { value: 5, count: 2 },
  { value: 1, count: 3 },
];

/*
Inp: 4
Out: "Impossible"

Inp: 29
Out: "Impossible"

Inp: 27
Out: "1x20 1x5 2x1"

Inp: 900
Out: "3x200 6x50"
*/