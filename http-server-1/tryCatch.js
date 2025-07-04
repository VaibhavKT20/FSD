// let a;
// console.log(a.length); //undefined

// console.log("Hi there!"); //undefined

// function getLength(name) {
//   return name.length;
// }

// let a;
// console.log(getLength(a)); //undefined

try {
  let a;
  console.log(a.length);
  console.log("Hi there from inside try block!"); // it does not execute
} catch (err) {
  console.log("Error:", err.message); //Error
}

console.log("hii there!");


