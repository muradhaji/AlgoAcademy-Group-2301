// console.log(document.getElementById('myp2'));
// console.log(document.getElementById('myp4'));
// console.log(document.getElementById('myp3'));

// let x = document.getElementById('myp2');
// x.innerText = 'Changed';
// x.innerText += 'Changed2';

// console.log(document.body.children);
// console.log(document.body.children[1]);
// console.log(document.body.children['myp2']);
// console.log(myp2);
// console.log(myp4);

// console.log(document.getElementsByClassName('ourp'));
// console.log(document.getElementsByClassName('op1'));
// console.log(document.getElementsByClassName('ourp op1'));
// console.log(document.getElementsByClassName('op1 ourp'));
// console.log(document.getElementsByClassName('ourp op3'));
// console.log(document.getElementsByClassName('op3'));

// console.log(document.getElementsByTagName('body'));;
// console.log(document.getElementsByTagName('p'));;
// console.log(document.getElementsByTagName('script'));;
// console.log(document.getElementsByName('test'));;

// function add() {
//   let aInp = document.getElementsByName('a')[0];
//   let bInp = document.getElementsByName('b')[0];
//   let cInp = document.getElementsByName('c')[0];

//   cInp.value = +aInp.value + +bInp.value;
// }

// function multiple() {
//   let aInp = document.getElementsByName('a')[0];
//   let bInp = document.getElementsByName('b')[0];
//   let cInp = document.getElementsByName('c')[0];

//   cInp.value = +aInp.value * +bInp.value;
// }

// console.log(document.querySelector('button'));
// console.log(document.querySelectorAll('button'));
// console.log(document.querySelectorAll('form > button'));
// console.log(document.querySelectorAll('body > button'));
// console.log(document.querySelectorAll('#myp2'));

// let a = document.getElementById('mylink1');
// a.href = '#test';

// let x = document.getElementById('myhead1');
// x.innerText = 'Heading changed';

// function darkMode() {
//   if (document.body.style.backgroundColor == 'gray') {
//     document.getElementById('dmbutton').innerText = 'Dark Mode';
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//     document.getElementById('mylink1').style.color = 'black';
//   } else {
//     document.getElementById('dmbutton').innerText = 'Light Mode';
//     document.body.style.backgroundColor = 'gray';
//     document.body.style.color = 'white';
//     document.getElementById('mylink1').style.color = 'white';
//   }
// }

function darkMode() {
  if (document.body.classList.value.includes('darkmode')) {
    document.body.setAttribute('class', 'lightmode');
  } else {
    document.body.setAttribute('class', 'darkmode');
  }
}
