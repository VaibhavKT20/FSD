// const users = '{"name":"John","age":30,"city":"New York"}';
// const user = JSON.parse(users);
// console.log(user["name"]); // John
// console.log(user["age"]); // 30
// console.log(user["city"]); // New York

const user1 = {
  name: "John Doe",
  age: 30,
};
const finalString = JSON.stringify(user1);
console.log(finalString["name"]); //undefined
console.log(user1["name"]); // John Doe

console.log(finalString); // {"name":"John Doe","age":30}
