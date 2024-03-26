// console.log(document.body.childNodes);
// console.log(document.body.children);

// console.log(document.body.previousSibling);
// console.log(document.body.previousElementSibling);

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

// console.log(document.body.parentElement.parentNode);
// console.log(document.body.parentElement.parentElement);

// console.log(document.getElementsByTagName('body')[0].childNodes[1]);
// console.log(document.body.childNodes[1]);
// console.log(document.body.children[0]);
// console.log(document.querySelectorAll('html > body > h1'));
// console.log(document.querySelectorAll('html > body + h1'));

// console.log(document.querySelector('html > body > h1:first-child'));
// console.log(document.querySelector('html > body > h1:last-child'));

// console.log(
//   document.querySelector('html > body > h1:nth-child(odd)').innerHTML
// );

// console.log(document.body.childNodes);
// console.log(document.body.childNodes[1]);
// console.log(document.body.childNodes[2]);
// console.log(document.body.childNodes[5]);

// console.log(document.body.childNodes[1].nodeType);
// console.log(document.body.childNodes[2].nodeType);
// console.log(document.body.childNodes[5].nodeTypes);
// console.log(document.body.attributes[1].nodeType);
// console.log(document.nodeType);

// console.log(document.body.childNodes[1].nodeName);
// console.log(document.body.childNodes[1].tagName);
// console.log(document.body.childNodes[2].nodeName);
// console.log(document.body.childNodes[2].tagName);
// console.log(document.body.childNodes[5].nodeName);
// console.log(document.body.childNodes[5].tagName);
// console.log(document.body.attributes[1].nodeName);
// console.log(document.body.attributes[1].tagName);
// console.log(document.nodeName);
// console.log(document.tagName);

// console.log(document.getElementById('mylist').innerHTML);
// console.log(document.getElementById('mylist').textContent);
// console.log(document.getElementById('mylist').innerText);
// console.log(document.getElementById('mylist').outerHTML);

// console.log(document.body.childNodes[2].nodeValue);
// console.log(document.body.childNodes[2].data);
// console.log(document.body.childNodes[5].nodeValue);
// console.log(document.body.childNodes[5].data);

// console.log(document.body.children[1].innerHTML = "<i>italic text</i>");
// console.log(document.body.children[1].textContent = "<i>italic text</i>");
// console.log(document.body.children[1].innerText = '<i>italic text</i>');

// console.log(document.body.hasAttribute('id'));
// console.log(document.body.hasAttribute('style'));

// console.log(document.body.children[1].hasAttribute('id'));
// console.log(document.body.children[1].hasAttribute('style'));

// console.log(document.body.getAttribute('id'));
// console.log(document.body.getAttribute('style'));

// console.log(document.body.setAttribute('style', 'background-color: gray;'));

// console.log(document.body.removeAttribute('style'));

// console.log(document.body.attributes);

// let bodyattrs = document.body.attributes;

// for (let i = 0; i < bodyattrs.length; i++) {
//   console.log(bodyattrs[i].name, '-->', bodyattrs[i].value);
// }

// MuhammadAli left **

// console.log(document.body.children[0]);
// console.log(document.body.children[0].id);
// console.log(document.body.children[0]['id']);

// console.log(document.body.children[0]['my-custom-prop']);
// console.log(document.body.children[0].hasAttribute('my-custom-prop'));
// console.log(document.body.children[0].getAttribute('my-custom-prop'));
// console.log(document.body.children[0].setAttribute('my-custom-prop', "changed"));
// console.log(document.body.children[0].removeAttribute('my-custom-prop'));
// console.log(document.body.children[0].hasAttribute('my-custom-prop'));

// console.log(document.body.children[1].dataset);
// console.log(document.body.children[1].dataset.name);
// console.log(document.body.children[1].dataset.age);
// console.log(document.body.children[1].dataset.lastName);
// document.body.children[1].dataset.height = 180;
// document.body.children[1].dataset.isMarried = true;

// document.head.children[2].innerText = 'Page title changed';

function changeImage() {
  let width = 200 + Math.floor(Math.random() * 301);
  let height = 200 + Math.floor(Math.random() * 301);
  document
    .getElementsByTagName('img')[0]
    .setAttribute('src', `https://placehold.co/${width}x${height}`);

  document
    .getElementsByTagName('img')[0]
    .setAttribute('title', `${width} x ${height}`);
}

function changeTheme(elem) {
  console.log(elem.innerText);
  if (document.body.dataset.theme == 'dark') {
    document.body.dataset.theme = 'light';
  } else {
    document.body.dataset.theme = 'dark';
  }
}
