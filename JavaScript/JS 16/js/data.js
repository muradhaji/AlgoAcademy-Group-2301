// document.cookie = 'name=John';
// document.cookie = 'name=Mike; path=/about';
// document.cookie = 'name=Elliot; path=/contact';
// document.cookie = 'surname=Doe';
// document.cookie = 'theme=dark; path=/news; max-age=100';
// document.cookie = 'theme=dark';

// function getCookies() {
//   let allCookies = {};

//   let cookies = document.cookie.split('; ');
//   for (let i = 0; i < cookies.length; i++) {
//     let cookie = cookies[i].split('=');
//     allCookies[cookie[0]] = cookie[1];
//   }

//   return allCookies;
// }

// function changeTheme() {
//   let cookies = getCookies();

//   if (cookies.theme === 'dark') {
//     document.cookie = 'theme=light';
//   } else {
//     document.cookie = 'theme=dark';
//   }

//   location.reload();
// }

// if (getCookies().theme === 'dark') {
//   document.body.style.backgroundColor = 'black';
// } else {
//   document.body.style.backgroundColor = 'lightgray';
// }

// sessionStorage.setItem('name', 'John');
// sessionStorage.setItem('surname', 'Doe');
// sessionStorage.setItem('age', 27);

// localStorage.setItem('name', 'john');
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');
// localStorage.clear();
// console.log(localStorage.length);
// console.log(localStorage.key(0));
// console.log(localStorage.key(1));
