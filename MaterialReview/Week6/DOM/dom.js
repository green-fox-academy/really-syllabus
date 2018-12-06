// getElementById
const reallyById = document.getElementById('rlly');

// querySelector 
const reallyBySelector = document.querySelector('.really');

// getElementsByClassName
const getClasses = document.getElementsByClassName('class');

// querySelectorAll
const getClassesBySelector = document.querySelectorAll('.class');
const getClassesBySelector = document.querySelectorAll('.really, .roboto');

getClassesBySelector.forEach(e => {
  console.log(e);
});


const classes = document.querySelector('.classes');

// createElement
const shakespeareClass = document.createElement('div');
const brainfuckClass = document.createElement('div');

// innerText VS textContent
shakespeareClass.innerText = 'Shakespeare class';

// innerHTML
brainfuckClass.innerHTML = '<h1> Brainfuck class </h1>';

const tiptop = document.querySelector('.tiptop');

// appendChild for adding to the parent Node
classes.appendChild(shakespeareClass);
classes.appendChild(brainfuckClass);

// removeChild for removing from the parent Node
classes.removeChild(tiptop);

// insertBefore for inserting before another element
classes.insertBefore(tiptop, shakespeareClass);

// getAttribute for getting any attributes
console.log(classes.getAttribute('class'));

// setAttribute for setting any attributes
classes.setAttribute('id', 'cls');

// style 
classes.style.color = 'red';

// style.display
shakespeareClass.style.display = 'none';

// className
console.log(classes.className);

// classList 
console.log(classes.classList);

// classList.add
classes.classList.add('red');

// classList.remove
classes.classList.remove('classes');

// classList.contains
classes.classList.contains('red');

// classList.replace
classes.classList.replace('red', 'classes');

// onclick

const button = document.querySelector('.btn');
button.onclick = () => {
  
  // classList.toggle
  shakespeareClass.classList.toggle('visible');
}


