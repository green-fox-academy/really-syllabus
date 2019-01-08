const form = document.querySelector('form');
form.onsubmit = (event) => {
  event.preventDefault();
  const { username, password, age, homecity, sex, fav_animal } = form.elements;
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/registry');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    username: username.value,
    password: password.value,
    age: age.value,
    homecity: homecity.value,
    sex: sex.value,
    fav_animal: fav_animal.value
  }));
  xhr.onload = () => {
    window.location = '/login';
  }
}
