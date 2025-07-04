// function asyncFunction() {
//   let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hi there!");
//     }, 1000);
//   });
//   return p;
// }

// async function main() {
//   let value = await asyncFunction();
//   console.log(value);
// }
// main();

function onDone() {
  console.log("Done");
}

setTimeout(onDone, 5000);
// onDone();

let ans = 0;
for (let i = 0; i < 100; i++) {
  ans += i;
}
console.log(ans);

console.log("After SetTimeout");
