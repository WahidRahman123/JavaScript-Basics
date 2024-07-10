const userEmail = []


//Array empty checking
// if(userEmail.length === 0)
// {
//   console.log("Array is empty.");
// }

const obj1 = {}

//Object.keys() returns arrays of keys. Checking the length of that array will tell if the obj1 is empty or not.
if (Object.keys(obj1).length === 0)
{
  console.log("The object is empty.");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// first one

// val1 = null ?? 10
// first one without the null and undefined 

// val1 = undefined ?? 15
// first one without the null and undefined 

// val1 = undefined ?? 10 ?? 15
// first one without the null and undefined 

console.log(val1); 