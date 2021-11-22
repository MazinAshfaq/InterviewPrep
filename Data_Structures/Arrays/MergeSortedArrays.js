//Merge Sorted Arrays
//Input 2 arrays
//Output is 1 sorted array

//Example
// array 1 = [0,11,22,33,44]
// array 2 = [1,15,25,60]
// Output = [0,1,11,15,22,25,33,44,60]

//What I am thinking
//One loop to create new array with all values,
//One loop  to sort values

//Edge cases
//Empty array
//Already sorted **
//different types in array

let arr1 = [0, 11, 22, 33, 44];
let arr2 = [2, 4, 10, 43, 50];

function compareNumbers(a, b) {
  return a - b;
}

function MergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  let SortedArray = [];
  //Loop to merge arrays
  for (let i = 0; i < arr1.length; i++) {
    //(O(a))
    SortedArray.push(arr1[i]); //O(1)
  }
  for (let i = 0; i < arr2.length; i++) {
    //(O(b))
    SortedArray.push(arr2[i]); //O(1)
  }

  console.log(SortedArray);
  SortedArray.sort(compareNumbers); //O(n)
  return SortedArray;
}

console.log(MergeSortedArrays(arr1, arr2)); //(O(a*b*c))
