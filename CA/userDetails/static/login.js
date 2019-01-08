const form = document.querySelector('form');
form.onsubmit = (event) => {
  event.preventDefault();
  const { username, password } = form.elements;
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/login');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    username: username.value,
    password: password.value
  }));
  xhr.onload = () => {
    const res = JSON.parse(xhr.responseText);
    if(res.id) {
      window.location = res.pathTo + '/' + res.id;
    } else {
      window.location = res.pathTo;
    }
  }
}

