const xhr = new XMLHttpRequest();
xhr.open('GET', '/author');
xhr.onload = () => {
  if (xhr.status === 200) {
    const res = JSON.parse(xhr.responseText);
    authorTable(res);
  }
}
xhr.send();

const tableDiv = document.querySelector('.mytable');

const authorTable = (data) => {
  const tr = document.createElement('tr');
  const thID = document.createElement('th');
  const thNAME = document.createElement('th');
  const thHome = document.createElement('th');
  const thCountry = document.createElement('th');
  const thButton = document.createElement('th');
  thID.textContent = 'ID';
  thNAME.textContent = 'Name';
  thCountry.textContent = 'Country';
  thHome.textContent = 'Home City';
  thButton.textContent = 'Delete';
  tr.appendChild(thID);
  tr.appendChild(thNAME);
  tr.appendChild(thCountry);
  tr.appendChild(thHome);
  tr.appendChild(thButton);
  tableDiv.appendChild(tr);
  data.forEach(e => {
  const tr = document.createElement('tr');
  const tdId = document.createElement('td');
  const tdName = document.createElement('td');
  const tdCountry = document.createElement('td');
  const tdCity = document.createElement('td');
  const tdButton = document.createElement('td');
  const button = document.createElement('button');
  tdId.textContent = e.aut_id;
  tdName.textContent = e.aut_name;
  tdCountry.textContent = e.country;
  tdCity.textContent = e.home_city;
  button.textContent = 'Delete';
  button.setAttribute('id', e.aut_id);
  tr.appendChild(tdId);
  tr.appendChild(tdName);
  tr.appendChild(tdCountry);
  tr.appendChild(tdCity);
  tdButton.appendChild(button);
  tr.appendChild(tdButton);
  tableDiv.appendChild(tr);
});

}

tableDiv.addEventListener('click', (event) => {
  const deleteXhR = new XMLHttpRequest();
  deleteXhR.open('DELETE', '/author');
  deleteXhR.setRequestHeader('Content-Type', 'application/json');
  deleteXhR.send(JSON.stringify({
    aut_id: event.target.id
  }));
  deleteXhR.onload = () => {
    console.log(JSON.parse(deleteXhR.responseText));
  }
});

const form = document.querySelector('.post');
const { aut_id, aut_name, country, home_city } = form.elements; 
form.addEventListener('submit', (event) => {
  event.preventDefaxult();
  const postXHR = new XMLHttpRequest();
  postXHR.open('POST', '/author');
  postXHR.setRequestHeader('Content-Type', 'application/json');
  postXHR.send(JSON.stringify({
    aut_id: aut_id.value,
    aut_name: aut_name.value,
    country: country.value,
    home_city: home_city.value
  }));
  postXHR.onload = () => {
    console.log(JSON.parse(postXHR.responseText));
  }
});

const deleteForm = document.querySelector('.delete');
deleteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const deleteXHR = new XMLHttpRequest();
  deleteXHR.open('DELETE', '/author');
  deleteXHR.setRequestHeader('Content-Type', 'application/json');
  deleteXHR.send(JSON.stringify({
    aut_id: deleteForm.elements.aut_id.value
  }));
  deleteXHR.onload = () => {
    console.log(JSON.parse(deleteXHR.responseText));
  }
})