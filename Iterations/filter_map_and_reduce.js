// const coding = ["js", "C++", "C", "java", "python", "ruby"]

// const values = coding.forEach( (item) => {
//   console.log(item);
// } );

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//* filter method returns something.

//Format: const/let varName = array.filter( (item) => condition ) //! The item that follows the condition will be returned.

// const ar = myNums.filter( (item) => item > 4 ) 
//or,
// const ar = myNums.filter( (item) => (item > 4) )
//or, 
const ar = myNums.filter( (item) => {
  return item > 4
} ) 
// console.log(ar);

//* ----------------------------------------------
//* map() method:
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbers = myNumbers.map( (num) => num + 10 )

console.log(newNumbers);

//*======================================Chaining=======================================*//
// const newNum = myNumbers.map().map().filter()    //*This is called chaining.
// Example:
const newNum = myNumbers.map((num) => num*10).map((num) => num+5).filter((num) => num > 43)
//* The above line task is called chaining. 
console.log(newNum);
//*=====================================================================================*//