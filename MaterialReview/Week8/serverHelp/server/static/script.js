const xhr = new XMLHttpRequest();
// get request to our localhost server with a query name
xhr.open('GET', '/bello?name=bence');
xhr.onload = () => {
  console.log(JSON.parse(xhr.responseText));
}
xhr.send();

const myObject = {
  name: 'cica',
  age: '12'
};

const button = document.querySelector('button');
button.onclick = () => {
  const xhr1 = new XMLHttpRequest();
  // create post request to our server to the /cica endpoint
  xhr1.open('POST', '/cica');
  xhr1.onload = () => {
    // parse the response if you have any
    console.log(JSON.parse(xhr1.responseText));
  };
  xhr1.setRequestHeader('Content-Type', 'application/json');
  //send the post request with the object what you would like to send
  xhr1.send(JSON.stringify(myObject));
}