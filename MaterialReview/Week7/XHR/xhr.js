const API_BASE_URL = "https://greenfox-logger.glitch.me"

// send a simple GET request
// 1, create the XHR object
// const xhr = new XMLHttpRequest();
//
// 2a, listen to the readystatechange event -> when the response received
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     if (xhr.status === 200) {
//       const response = JSON.parse(xhr.responseText);
//       console.log(response.alma);
//       console.log(response.apple);
//       // here you can manipulate the dom
//     }
//   }
// };
//
// 2b, onload, wrapper around the onreadystatechange - same as above
// xhr.onload = () => {
//   if (xhr.status === 200) {
//     const response = JSON.parse(xhr.responseText);
//     console.log(response.alma);
//     console.log(response.apple);
//   }
// };
// 3, open the communication channel
// xhr.open('GET', `${API_BASE_URL}/vmi`, true);
// 4, send the request
// xhr.send();


// POST request, send data to the server
// 1, create the content what will be sent
// const testRequestBody = {
//   tiptop: 20,
//   really: 22
// };
//
// xhr.onload = () => {};
// xhr.open('POST', `${API_BASE_URL}/new-vmi`, true);
//
// 2, set the content type, otherwise the server wont understand the message
// xhr.setRequestHeader('Content-Type', 'application/json');
// 3, convert to payload to string and send it
// xhr.send(JSON.stringify(testRequestBody));



// cors: you cannot access data from other domain
// unless it is explicitly allowed by the server
// xhr.open('GET', `http://google.com`);
// xhr.send();



// query parameters, how to specify the GET context
// http://google.com/search?q=js&limit=20
// https://www.netpincer.hu/search/shop?term=pizza


