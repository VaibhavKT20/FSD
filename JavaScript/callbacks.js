// function square(n) {
//   return n * n;
// }
// function sumOfSquare(a, b) {
//   const val1 = square(a);
//   const val2 = square(b);
//   return val1 + val2;
// }

// console.log(sumOfSquare(2, 3)); // 13

// function square(n) {
//   return n * n;
// }
// function cube(n) {
//   return n * n * n;
// }

// function sumofShape(a, b, callback) {
//   const val1 = callback(a);
//   const val2 = callback(b);
//   return val1 + val2;
// }

// console.log(sumofShape(2, 3, square)); // 13
// console.log(sumofShape(2, 3, cube)); // 35

function sumofShape(a, b, callback) {
  const val1 = callback(a);
  const val2 = callback(b);
  return val1 + val2;
}

const ans = sumofShape(2, 3, function (n) {
  return n * n;
});
console.log(ans); // Outputs: 13
