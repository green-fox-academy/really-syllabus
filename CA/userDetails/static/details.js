  const xhr = new XMLHttpRequest();
  xhr.open('GET', `/api${window.location.pathname}`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    const res = JSON.parse(xhr.responseText);
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const userli = document.createElement('li');
    li.innerText = res[0].sex;
    userli.innerText = res[0].username;
    ul.appendChild(li);
    ul.appendChild(userli);
    document.body.appendChild(ul);
  }
  xhr.send();