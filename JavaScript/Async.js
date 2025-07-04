// function findSum(n) {
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     ans += i;
//   }
//   return ans;
// }
// function findSumTill100() {
//   console.log(findSum(100));
// }

// // setTimeout(findSumTill100, 1000);

// //Busy waiting
// function syncSleep() {
//   let a = 1;
//   for (let i = 0; i < 1000000000; i++) {
//     a++;
//   }
// }
// syncSleep();
// findSumTill100();
// console.log("Hello World!");

//Inbuilt async function provided by javascript

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, data) {
//   console.log(data);
// });

// console.log("Hii there");
// let a=0;
// for (let i = 0; i < 100000000; i++) {
//   a++;
// }

// console.log("Hii there 2");

//Example of async function

// console.log("Hii!");

// setTimeout(() => {
//   console.log("Click the button");
// }, 5000);

// setTimeout(() => {
//   console.log("Click the button 2");
// }, 2000);

// console.log("Hii there 2");

// function square(n) {
//   return n * n;
// }

// function cube(n) {
//   return n * n * n;
// }

// function findSquareAndCube(n, callback) {
//   setTimeout(() => {
//     const squareResult = square(n);
//     const cubeResult = cube(n);
//     callback(squareResult, cubeResult);
//   }, 2000);
// }

// findSquareAndCube(5, (squareResult, cubeResult) => {
//   console.log(`Square: ${squareResult}`);
//   console.log(`Cube: ${cubeResult}`);
// });

//Asynchronous programming in javascript

// const fs = require("fs");
// function kiratReadFile(cb) {
//   fs.readFile("a.txt", "utf-8", (err, data) => {
//     cb(data);
//   });
// }

// function onDone(data) {
//   console.log(data);
// }

// kiratReadFile(onDone);

const fs = require("fs");
function readFilePromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("a.txt", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
function onDone(data) {
  console.log(data);
}

readFilePromise()
  .then(onDone)
  .catch((err) => console.error("Error reading file:", err));
