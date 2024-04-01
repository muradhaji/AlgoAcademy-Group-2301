let child = document.getElementsByClassName('child')[0];

// console.log(child.offsetParent);
// console.log(child.offsetLeft);
// console.log(child.offsetTop);
// console.log(child.offsetWidth);
// console.log(child.offsetHeight);
// console.log(child.clientLeft);
// console.log(child.clientTop);
// console.log(child.clientWidth);
// console.log(child.clientHeight);
// console.log(child.scrollWidth);
// console.log(child.scrollHeight);
// console.log(child.scrollLeft);
// console.log(child.scrollTop);

// window.scroll(0, 1000);
// window.scroll({ left: 0, top: 1000, behavior: '' });
// window.scrollTo(0, 1000);
// window.scrollTo({ left: 0, top: 1000, behavior: 'smooth' });
// window.scrollBy(0, 100);

let testDiv = document.getElementById('test');

testDiv.scrollIntoView();
testDiv.scrollIntoView(true);
testDiv.scrollIntoView(false);
