// function testF1() {
//   console.log('F1 worked!');
// }
// function testF2() {
//   console.log('F2 worked!');
// }

// let myh = document.getElementById('myh');
// // myh.onclick = testF1;

// myh.addEventListener('click', testF1);
// myh.addEventListener('click', testF2);
// myh.removeEventListener('click', testF1);

// let myh = document.getElementById('myh');

// function testF(event) {
//   console.log(event);
// }

// function testF2(event) {
//   // console.log(event.clientX, event.clientY);
//   console.log(event);
//   str += event.key;
// }

// let str = '';

// myh.addEventListener('click', testF);
// window.addEventListener('keydown', testF2);
// // window.addEventListener('mousemove', testF2);

// function fp(e) {
//   e.stopPropagation();
//   console.log('parent clicked');
// }
// function fm(e) {
//   e.stopPropagation();
//   console.log('middle clicked');
// }
// function fc(e) {
//   e.stopPropagation();
//   console.log('child clicked');
// }

// function testA(e) {
//   e.preventDefault();
//   console.log('link clicked');
// }

// let link = document.getElementsByTagName('a')[0];
// link.addEventListener('click', testA);

// window.addEventListener('contextmenu', (e) => {
//   e.preventDefault();

//   if (document.getElementById('rightMenu') == null) {
//     let menu = document.createElement('div');
//     menu.setAttribute('id', 'rightMenu');
//     menu.style.cssText = `position: fixed; left: ${e.clientX}px; top: ${e.clientY}px; width: 200px; height: 300px; background-color: darkcyan; border-radius: 16px;`;
//     document.body.append(menu);
//   }
// });

// window.addEventListener('keydown', (e) => {
//   if (e.key === '=' && e.ctrlKey) {
//     e.preventDefault();
//   } else if (e.key === '-' && e.ctrlKey) {
//     e.preventDefault();
//   } else if (e.key === 's' && e.ctrlKey) {
//     e.preventDefault();
//   }
// });

// window.addEventListener('DOMContentLoaded', (e) => {
//   console.log('Page loaded');
//   document.getElementById('loading').style.display = 'none';
// });

// document.getElementById('parent').addEventListener('mouseover', (e) => {
//   console.log(e);
// });
// document.getElementById('other').addEventListener('mouseover', (e) => {
//   console.log(e);
// });
// document.getElementById('parent').addEventListener('mouseenter', (e) => {
//   console.log(e);
// });
document.addEventListener('fullscreenchange', (e) => {
  alert('asdasd');
});
