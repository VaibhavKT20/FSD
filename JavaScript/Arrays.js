const initialArray = [1, 2, 3, 4, 5];

initialArray.push(6); // Add 6 to the end of the array
console.log(initialArray); // [1, 2, 3, 4, 5, 6]

initialArray.pop(); // Remove the last element (6)
console.log(initialArray); // [1, 2, 3, 4, 5]

initialArray.unshift(0); // Add 0 to the beginning of the array
console.log(initialArray); // [0, 1, 2, 3, 4, 5]

initialArray.shift(); // Remove the first element (0)
console.log(initialArray); // [1, 2, 3, 4, 5]

const secondArray = [6, 7, 8, 9, 10];

console.log(initialArray.concat(secondArray));

for (let i = 0; i < secondArray.length; i++) {
  initialArray.push(secondArray[i]);
}
console.log(initialArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < initialArray.length; i++) {
//   console.log(initialArray[i]);
// }

initialArray.forEach((element) => {
  console.log(element); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
});


