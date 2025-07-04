// console.log("Hello, World!");
// console.log("This is a test.");
// console.log("Hello, World! 2!");
// console.log("This is a test 2.");

// var a=1;
// a=2;
// console.log(a);

// const a=1;
// a=2 Not allowed, as a is a constant
// console.log(a);

// let a=1;
a = 2; // Allowed, as a is a variable
// console.log(a);

// var b=1
// var b=2 // Allowed, as b is a variable
// console.log(b);

//Data Types

// let firstName = "John"; // String
// let age = 30; // Number
// let isStudent = true; // Boolean
// let height = 5.9; // Float
// let hobbies = ["reading", "sports", "music"]; // Array
// let person = { name: "John", age: 30 }; // Object
// let isNull = null; // Null
// let isUndefined; // Undefined
// let symbol = Symbol("unique"); // Symbol
// let bigInt = BigInt(123456789012345678901234567890); // BigInt
// let date = new Date(); // Date
// let regex = /ab+c/; // Regular Expression
// let map = new Map(); // Map
// let set = new Set(); // Set
// let weakMap = new WeakMap(); // WeakMap
// let weakSet = new WeakSet(); // WeakSet
// let arrayBuffer = new ArrayBuffer(8); // ArrayBuffer
// let typedArray = new Uint8Array(arrayBuffer); // Typed Array

// console.log(firstName); // String
// console.log(age); // Number
// console.log(isStudent); // Boolean
// console.log(height); // Float
// console.log(hobbies); // Array
// console.log(person); // Object
// console.log(isNull); // Null
// console.log(isUndefined); // Undefined
// console.log(symbol); // Symbol
// console.log(bigInt); // BigInt
// console.log(date); // Date
// console.log(regex); // Regular Expression
// console.log(map); // Map
// console.log(set); // Set
// console.log(weakMap); // WeakMap
// console.log(weakSet); // WeakSet
// console.log(arrayBuffer); // ArrayBuffer
// console.log(typedArray); // Typed Array
// console.log(typeof firstName); // String
// console.log(typeof age); // Number
// console.log(typeof isStudent); // Boolean
// console.log(typeof height); // Float
// console.log(typeof hobbies); // Array
// console.log(typeof person); // Object
// console.log(typeof isNull); // Null
// console.log(typeof isUndefined); // Undefined
// console.log(typeof symbol); // Symbol
// console.log(typeof bigInt); // BigInt
// console.log(typeof date); // Date
// console.log(typeof regex); // Regular Expression
// console.log(typeof map); // Map
// console.log(typeof set); // Set
// console.log(typeof weakMap); // WeakMap
// console.log(typeof weakSet); // WeakSet
// console.log(typeof arrayBuffer); // ArrayBuffer
// console.log(typeof typedArray); // Typed Array
// console.log(typeof firstName === "string"); // String
// console.log(typeof age === "number"); // Number
// console.log(typeof isStudent === "boolean"); // Boolean
// console.log(typeof height === "number"); // Float
// console.log(Array.isArray(hobbies)); // Array
// console.log(typeof person === "object"); // Object
// console.log(isNull === null); // Null

//Loops
// let answer = 0;
// for (let i = 0; i <= 100; i++) {
//   answer += i;
// }
// console.log(answer); // 5050

//Arrays

// let person = ["Harikirat", "Ram", "Shyam", "Sita", "Gita"];
// let age = [20, 30, 40, 50, 60];
// let gender = ["Male", "Male", "Male", "Female", "Female"];
// for (let i = 0; i < person.length; i++) {
//   console.log(person[i] + " is " + age[i] + " years old and is " + gender[i]);
// }

// for (let i = 0; i < person.length; i++) {
//   if (gender[i] === "Male") {
//     console.log(person[i]);
//   }
// }

//Objects

// let user1 = {
//   name: "John",
//   age: 30,
//   gender: "Male",
// };
// console.log(user1.name); // John
// console.log(user1.age); // 30
// console.log(user1.gender);
// console.log(user1);
// console.log(user1["name"]); // John
// console.log(user1["age"]); // 30
// console.log(user1["gender"]); // Male

// Array of Objects
// const allUsers = [
//   {
//     name: "John",
//     age: 30,
//   },
//   {
//     name: "Ram",
//     age: 40,
//   },
//   {
//     name: "Shyam",
//     age: 50,
//   },
//   {
//     name: "Sita",
//     age: 60,
//   },
//   {
//     name: "Gita",
//     age: 70,
//   },
// ];

// console.log(allUsers);
// console.log(allUsers[0].name); // John
// console.log(allUsers[0].age); // 30

// for (let i = 0; i < allUsers.length; i++) {
//   console.log(allUsers[i].name + " is " + allUsers[i].age + " years old.");
//   if (allUsers[i].age > 50) {
//     console.log(allUsers[i].name + " is older than 50.");
//   } else {
//     console.log(allUsers[i].name + " is younger than 50.");
//   }
// }

// Functions

// function add(a, b) {
//   return a + b;
// }

// console.log(add(1, 2)); // 3

// const value = add(1, 2);
// console.log(value); // 3

// Callback Functions
// function sum(num1, num2, fntoCall) {
//   let result = num1 + num2;
//   fntoCall(result);
// }

// function displayResult(result) {
//   console.log("The result is: " + result);
// }

// const ans = sum(1, 2, displayResult); // The result is: 3

// function calculateArithmetic(a, b, type) {
//   if (type == "sum") {
//     const value = sum(a, b);
//     return value;
//   }
//   if (type == "sub") {
//     const value = sub(a, b);
//     return value;
//   }
//   if (type == "mul") {
//     const value = mul(a, b);
//     return value;
//   }
//   if (type == "div") {
//     const value = div(a, b);
//     return value;
//   }
//   if (type == "mod") {
//     const value = mod(a, b);
//     return value;
//   }
// }
// function sum(a, b) {
//   return a + b;
// }
// function sub(a, b) {
//   return a - b;
// }
// function mul(a, b) {
//   return a * b;
// }
// function div(a, b) {
//   return a / b;
// }
// function mod(a, b) {
//   return a % b;
// }

// const value = calculateArithmetic(1, 2, "sum");
// console.log(value); // 3

// const value1 = calculateArithmetic(10, 5, "mod");
// console.log(value1); // 0

//SetTimeout and SetInterval

// function greet() {
//   console.log("Hello, World!");
// }
// setTimeout(greet, 3 * 1000);

// setInterval(greet, 1 * 1000);

// (() => {})();
// IIFE (Immediately Invoked Function Expression)

