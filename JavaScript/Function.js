function getLengthOfString(str) {
  return str.length;
}

console.log(getLengthOfString("Hello World!")); // 12

function findsum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(findsum(100)); // 5050
