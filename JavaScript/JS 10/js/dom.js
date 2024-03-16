// function testFunc() {
//   console.log(this);
// }

// let testObj = {
//   // testMethod: function () {
//   //   console.log(this);
//   // },
//   testMethod: testFunc,
// };

// testFunc();
// window.testFunc();

// // window.alert('asdasd');
// // window.prompt();
// // window.confirm();

// testObj.testMethod();

// console.log(window);
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.outerWidth);
// console.log(window.outerHeight);

// window.addEventListener('scroll', () => {
//   if (window.scrollY >= 200) {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// });

// function myScroll() {
// window.scrollTo({ behavior: 'smooth', top: 300 });
//   // window.scrollTo({ top: 300 });
// }

// console.log(navigator.userAgent);
// console.log(navigator.platform);

// navigator.geolocation.getCurrentPosition(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err.message);
//   }
// );

// console.log(screen.orientation.type);

// console.log(screen.orientation.angle);

// console.log(location);
// location.reload();
// location.replace('https://www.azza.az');

// history.back();
// history.forward();
// history.go();
// console.log(history.length);

// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onload = function () {
//     let data = JSON.parse(this.responseText);
//     for (let todo of data) {
//       document.body.innerHTML += `<h1>${todo.completed ? '✅' : '❌'} ${
//         todo.title
//       }</h1>`;
//     }
//   };
//   xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos');
//   xhttp.send();
// }

// loadDoc();

// console.log(document);
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.body.childNodes[7]);
// console.log(
//   document.body.childNodes[7].previousSibling.previousSibling.previousSibling
//     .previousSibling
// );
// console.log(document.body.childNodes[7].nextSibling.nextSibling);

// console.log(document.body.childNodes);
// console.log(document.body.children);
// console.log(document.body.children[3]);

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// console.log(document.body.children[4]);

// console.log(document.body.children[4].previousSibling);
// console.log(document.body.children[4].nextSibling);
// console.log(document.body.children[4].previousElementSibling);
// console.log(document.body.children[4].nextElementSibling);

// console.log(document.body.parentNode);
// console.log(document.head.parentNode);
// console.log(document.documentElement.parentNode);
// console.log(document.documentElement.parentElement);

// document.body.children[4].children[7].children[0];

// document.body.children[0].innerHTML = '<i>John</i>';
// document.body.children[0].innerText = '<i>John</i>';

// let users = ['John Doe', 'Mike Ross'];

// console.log(Math.random());;

// Fibonacci

/*
0 1 1 2 3 5 8 13 21 34 55 89

10 -> 1 1 2 3 5 8
50 -> 1 1 2 3 5 8 13 21 34
3 ->  1 1 2 3
*/
