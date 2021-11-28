//Google Question

//Input : array
//Output : recurring number

//Examples
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Edge cases : Empty Array, Not numbers?
//Should I assume they are ints or can they be anything..

//Create a hash table, loop through array
//If it does not exist in the table then insert.
//If it does exist then return the value

let array = [2, 5, 5, 2, 3, 5, 1, 2, 4];
function firstRecurringCharacter(input) {
  const firstRecurringCharacter = new Set();

  for (let i = 0; i < input.length; i++) {
    if (firstRecurringCharacter.has(input[i])) {
      return input[i];
    } else if (!firstRecurringCharacter.has(input[i])) {
      firstRecurringCharacter.add(input[i]);
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter(array));
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
