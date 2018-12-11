// timeout
//
// the function what will be called later
// const logger = () => {
//   console.log('hello');
// }
// call the timeout
// const result = setTimeout(logger, 5000);
// if you change your mind you can cancel it
// clearTimeout(result);

// interval
// let counter = 0;
// set the interval
// const intervalId = setInterval(() => {
//   console.log(`baba ${counter++}`)
// }, 1000);

// you can mix the interval, and timeout 
// if you want to cancel an interval later
// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);


// xhr ❤️ callback (everything together)
// an almost universal ajax function
// const sendHTTPRequest = (url, method, callback) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       // http check is done, we can work with the parsed data
//       callback(JSON.parse(xhr.responseText));
//     }
//   }
//   xhr.send();
// }
//
// const URL = 'https://greenfox-logger.glitch.me/vmi'
// and the usage of the ajax function
// sendHTTPRequest(URL, 'GET', (response) => {
//   console.log(response);
//   // here you can manipulate the dom
// })


