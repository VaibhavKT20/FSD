function getLength(str) {
  console.log(str); // Hello World

  console.log(str.length);
}
getLength("Hello World"); // 11

const str = "vaibhav";
console.log(str.length); // 7

function findIndex(str, target) {
  console.log(str.indexOf(target));
  console.log("Index ", str.indexOf(target));
  console.log("Last Index ", str.lastIndexOf(target));
}
findIndex("vaibhav", "a"); // 2

function getSlice(str, start, end) {
  console.log(str);
  console.log(str.slice(start, end));
}

getSlice("vaibhav", 0, 3); // vai

console.log("vaibhav".slice(0, 3));

console.log("vaibhav".slice(2, 5)); // bha
console.log("vaibhav".slice(2)); // ibhav

const value = "vaibhav kumar";
// let ans = value.substr(0, 5);
let ans = value.substr(2, 5); //ibhav
let ans1 = value.slice(2, 5); //ibh
console.log(ans); // ibhav
console.log(ans1); // ibh

function cutIt(str, startIndex, endIndex) {
  let newstr = "";
  for (let i = 0; i < str.length; i++) {
    if (i >= startIndex && i <= endIndex) {
      newstr += str[i];
    }
  }
}
console.log(cutIt("vaibhav", 0, 3)); // vai

function replaceString(str, target, replacement) {
  console.log(str);
  console.log(str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

console.log("vaibhav kumar".replace("kumar", "Thakur")); // vaibhav Thakur

const str1 = "Hi,my,name,is,Vaibhav,Kumar";
const words = str1.split(",");
console.log(words);
const str2 = "         vaibhav kumar           ";
console.log(str2.trim()); // vaibhav kumar

const str3 = "vaibHav kumar";
console.log(str3.toUpperCase()); // VAIBHAV KUMAR
console.log(str3.toLowerCase()); // vaibhav kumar

function parseIntString(value) {
  console.log(value);
  let result = parseInt(value);
  console.log(result);
}
parseIntString("42");
parseIntString("42px");
parseIntString("3.14");
parseIntString("px3.14");


