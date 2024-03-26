// console.log(document.body.id);
// console.log(document.body.title);
// console.log(document.body.class);

// console.log(document.body.hasAttribute('class'));
// console.log(document.body.hasAttribute('my-custom-prop'));
// console.log(document.body.hasAttribute('href'));

// console.log(document.body.getAttribute('class'));
// console.log(document.body.getAttribute('my-custom-prop'));
// console.log(document.body.getAttribute('href'));

// document.body.setAttribute('class', 'asdfg');
// document.body.setAttribute('my-custom-prop', 'qwerty');
// document.body.setAttribute('href', 'zxcvb');

// document.body.removeAttribute('class');
// document.body.toggleAttribute('hidden');
// document.body.toggleAttribute('hidden');
// document.body.toggleAttribute('id');
// document.body.toggleAttribute('id');

// console.log(document.body.dataset);
// console.log(document.body.dataset.name);
// console.log(document.body.dataset.age);
// console.log(document.body.dataset.lastName);

// document.body.setAttribute('data-name', 'Mike');
// document.body.dataset.name = 'Mike';
// document.body.dataset.isMarried = true;

// console.log(document.body.attributes);
// console.log(document.body.attributes[5]);
// console.log(document.body.attributes['data-age']);

// let x = document.body.attributes;

// for (let i = 0; i < x.length; i++) {
//   let attr = x[i];
//   console.log(`${attr.name} --> ${attr.value}`);
// }

let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');

// div2.innerHTML += '<h1 id="asd1">Heading 7</h1>';

let newH = document.createElement('h1');
// newH.innerText = 'Heading 7';

let newHText = document.createTextNode('Heading 7');
newH.append(newHText);

// setTimeout(() => {
//   newH.remove();
// }, 2000);

// div2.prepend(newH);
// div2.append(newH);
// div2.before(newH);
// div2.after(newH);
// div2.remove();
// div2.replaceWith(newH);
// div2.replaceChildren(newH);
// div2.replaceChild(newH, div2.children[1]);
// div2.children[1].replaceWith(newH);

// div2.append('<h1>Heading 7</h1>');

// div2.insertAdjacentHTML('beforebegin', '<h1>Heading 7</h1>');
// div2.insertAdjacentHTML('afterbegin', '<h1>Heading 7</h1>');
// div2.insertAdjacentHTML('beforeend', '<h1>Heading 7</h1>');
// div2.insertAdjacentHTML('afterend', '<h1>Heading 7</h1>');

// let h2 = document.getElementById('myh2');

// // let h2copy = h2;
// // let h2copy = h2.cloneNode();
// let h2copy = h2.cloneNode(true);

// div2.append(h2copy);

// console.log(document.body.cloneNode(true));

// let fragment = new DocumentFragment();

// for (let i = 7; i <= 10; i++) {
//   let nwH = document.createElement('h1');
//   nwH.innerText = `Heading ${i}`;
//   // div2.append(nwH);
//   fragment.append(nwH);
// }
// console.log(fragment);
// div2.append(fragment);

// document.write('<h1>Heading 7</h1>');
// document.write('<h1>Heading 8</h1>');
// document.write('<h1>Heading 9</h1>');

// // setTimeout(() => {
// //   document.write('<h1>Heading 10</h1>');
// // }, 3000);

// function clickMe() {
//   // document.write('<h1>Heading 10</h1>');
// }

// function click4() {
//   document.getElementById('myh2').innerText += '4';
// }
// function click5() {
//   document.getElementById('myh2').innerText += '5';
// }
// function clickplus() {
//   document.getElementById('myh2').innerText += '+';
// }
// function clickcalc() {
//   let problem = document.getElementById('myh2').innerText;
//   if (problem.includes('+')) {
//     let operands = problem.split('+');
//     let answer = 0;
//     for (let i = 0; i < operands.length; i++) {
//       answer += Number(operands[i]);
//     }
//     document.getElementById('myh2').innerText = answer;
//   } else {
//   }
// }

// console.log(document.body.getAttribute('class'));
// document.body.setAttribute('class', 'changed');
// console.log(document.body.className);
// document.body.className = 'changed';

// console.log(document.body.classList.length);
// console.log(document.body.classList);
// console.log(document.body.classList.contains('asd'));
// console.log(document.body.classList.contains('tyu'));
// console.log(document.body.classList.add('bnm'));
// console.log(document.body.classList.remove('qwe'));
// console.log(document.body.classList.replace('asd', 'dsa'));
// console.log(document.body.classList.toggle('okm'));
// console.log(document.body.classList.toggle('okm'));
// console.log(document.body.classList.toggle('okm'));

// console.log(document.body.style.backgroundColor);
// document.body.style.backgroundColor = 'magenta';
// document.body.style.backgroundColor = '';

// console.log(document.body.style.getPropertyValue('background-color'));
// document.body.style.setProperty('background-color', 'magenta');
// document.body.style.removeProperty('background-color');

// document.body.style.cssText = `color: red !important;background-color: yellow;width: 100px;text-align: center;`;

// document.body.setAttribute(
//   'style',
//   `color: red !important;background-color: yellow;width: 100px;text-align: center;`
// );

console.log(getComputedStyle(document.body).backgroundColor);
console.log(getComputedStyle(document.body).padding);
console.log(getComputedStyle(document.body).color);
console.log(getComputedStyle(document.body).textAlign);
