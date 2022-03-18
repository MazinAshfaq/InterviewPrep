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

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  m--; //start at end of array
  n--; //start at end of array

  for (let i = nums1.length - 1; i >= 0; i--) {
    if (n < 0) {
      break;
    }
    if (nums1[m] > nums2[n]) {
      nums1[i] = nums1[m];
      m--;
    } else {
      nums1[i] = nums2[n];
      n--;
    }
  }
};

/*

[1,2,3,0,0,0], m = 2, 
    ^   
[2,5,6], n = 2
  ^     
[1,2,3,0,0,6] i = 5
          ^ 
first compare m and n 
if m is bigger, insert at end of first array
  decrement m
if n is bigger, insert at end of first array
  decrement n
if = insert m 

loop until either m < 0 or n < 0
*/
