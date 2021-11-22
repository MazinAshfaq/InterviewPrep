const strings = ["a", "b", "c", "d"];
//4 bytes each ... 16 bytes

//console.log(strings[2]);

//Appends to end of array
strings.push("e"); //O(1)

console.log(strings);

//Removes last element from array
strings.pop(); //O(1)

console.log(strings);

//Loops array to shift indeces to add to beggining of array
strings.unshift("x"); //O(n)

console.log(strings);

//Go to index 2, and add in mazin
strings.splice(2, 0, "mazin"); //O(n/2) ---> O(n)

console.log(strings);
