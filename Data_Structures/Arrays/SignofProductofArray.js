/**
 * {number[]} nums
 * {number}
 */

var arraySign = function (nums) {
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) return 0;
    nums[i] = Math.sign(nums[i]);
    product = product * nums[i];
  }
  return Math.sign(product);
};

//To avoid overflow, we take the sign of the nums[i]
//Then we just take the final sign of the final product
//return 0 if there is any 0 in the array
//Make sure to not set initial product to 0....

// IF YOU CANNOT USE Math.SIGN
// function sign(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; }

// if(x > 0) return 1
// if(x < 0) return -1
// return 0
