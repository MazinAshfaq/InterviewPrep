//Given two arrays, create a function that returns true or false based on if
//there are any common items in the arrays

//Inputs: 2 Arrays (Complexity = a + b)
//Output: boolean

//Examples
//array 1 = [ 1 2 3 4 5 ]
//array 2 = [ 5 6 7 8 9 ]
//Output : True (5 is common)

//array 1 = [1 2 3]
//array 2 = [4 5 6]
//Output : False

//What im thinking..
//Brute force method, two loops, first loops through the first loop while second loops through second loop,
//comparing each value.

//Time complexity O(a * b) <---- TWO DIFF INPUTS
//Space Complexity : Consant

//Edge Cases?
//Empty Array, return false imediatly.
//Return on first common

// Better Solution : Hash set the array, linear time for comparisons.

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  // can we assume always 2 params?

  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if item in second array exists on created object.
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

//O(a + b) Time Complexity
//O(a) Space Complexity

// containsCommonItem2(array1, array2)

function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}
