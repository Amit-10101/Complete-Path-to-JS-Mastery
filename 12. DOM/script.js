// DOM

// Selecting elements
// document.getElementById('id');
// document.getElementsByClassName('class');
// document.getElementsByTagName('h1');
// document.querySelectorAll('h1');

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
	alert('You clicked on the button');
});

console.log(btn.getBoundingClientRect()); // DOMRect {x: 8, y: 8, width: 84, height: 24, top: 8, …}

console.log(btn.hasAttribute('type')); // true
// addAttribute, removeAttribute, setAttribute

const menuClicked = (currEl) => {
	const menuItems = document.getElementsByClassName('menu-item'); // returns an array of items with class menu-item

	for (let i = 0; i < menuItems.length; i++) {
		menuItems[i].classList.remove('active');
	} // remove active class from all menu items

	currEl.classList.add('active'); // add active class to the current element
};

// Creating elements/Nodes
const heading = document.createElement('h1');
const body = document.querySelector('body');
body.appendChild(heading);
heading.innerText = 'Child Element';

// Traversing the Nodes
const subjects = document.querySelector('.subjects');
console.log(subjects.firstElementChild); // <li>Maths</li>
console.log(subjects.lastElementChild); // <li>English</li>

const favSubject = document.querySelector('.fav-subject');
console.log(favSubject); // <li class="fav-subject">Science</li>
console.log(favSubject.previousElementSibling); // <li>Maths</li>
console.log(favSubject.nextElementSibling); // <li>English</li>
console.log('\n');
console.log(favSubject.parentElement); // <ul class="subjects">...</ul>

// More Options
// ele.childNodes
// ele.firstChild
// ele.lastChild
// ele.previousSibling
// ele.nextSibling
// ele.parentNode

// Removing elements
favSubject.remove();
