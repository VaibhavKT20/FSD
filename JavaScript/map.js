// const sum = (a, b) => {
//   return a + b;
// };

// let add = sum(10, 20);
// console.log(add);

// app.get("/", (res, req) => {
//   res.send("hello world");
// });

//map filter, arrow fns

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newArray = [];

// for (let i = 0; i < input.length; i++) {
//   newArray.push(input[i] * 2);
// }

// console.log(newArray);

//map

function double(num) {
  return num * 2;
}

const ans = input.map(double);
console.log(ans);

const ans1 = input.map((num) => {
  return num * 2;
});
console.log(ans1);

//filter

const input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ans2 = input1.filter((num) => {
  return num % 2 == 0;
});
console.log(ans2);
