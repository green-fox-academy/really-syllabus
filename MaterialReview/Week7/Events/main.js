// create the button with content
// const button = document.createElement('button');
// button.appendChild(document.createTextNode('click me'));



// button.addEventListener('click', (event) => {
//   alert(1);
// });



// onclick vs addEventListener
// onclick: only one listener can be set, the second will overwrite the previous one
// button.onclick = () => alert(1);
// button.onclick = () => alert(1);



// if you want to remove a listener, you have to use a variable
// remember same is not the same :)
// const listener = () => alert(1);
// button.addEventListener('click', listener);
// button.removeEventListener('click', listener);



// how to prevent default behaviour - form submit, link navigation
// document.querySelector('a').addEventListener('click', e => e.preventDefault())



// capturing phase - inverse of bubbling before the bubbling itself
// root.appendChild(button);
// root.addEventListener('click', (mouseEvent) => {
//   alert(2);
// 
//}, true);
