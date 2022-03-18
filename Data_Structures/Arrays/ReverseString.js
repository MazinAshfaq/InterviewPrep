//Create a function that reverse a string.
//Turn into array, reverse array, turn back into string, return

let str = "Mazin";
function reverse(str) {
  console.log(str);
  let reversedString = str.split("").reverse().join("");
  return reversedString;
}
//console.log(reverse(str));

function reverse(str) {
  if (!str || typeof str != "string" || str.length < 2) return str;

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}
