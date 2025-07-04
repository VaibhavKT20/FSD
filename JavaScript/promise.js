// const { resolve } = require("path");

// var d = new Promise(function (resolve) {
//   setTimeout(() => {
//     resolve("foo");
//   }, 2000);
// });
// function callback() {
//   console.log(d);
// }
// d.then(callback);

// let p = new Promise((resolve, reject) => {
//   resolve("Hi There!");
// });

// p.then(() => {
//   console.log(p);
// });

function asyncFunction() {
  let p = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  });
  return p;
}

const value = asyncFunction();
value.then(() => {
  console.log("Hi there!");
});
