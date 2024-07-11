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


//*Reduce: (Calculates the values in the array)(It works like a loop)
//*==================================================================
const arr1 = [1, 2, 3, 4]

const initialValue = 0
const sumWithInitial = arr1.reduce(
  (accumulator, currentValue) => accumulator + currentValue, initialValue 
);

console.log(`The sum of arr1 is ${sumWithInitial}.`);

//*Another Example:
const arr2 = [1, 2, 3]

const res = arr2.reduce(
  (a, b) => {
    console.log(`accumulator is ${a} and currentValue is ${b}`);
    return a+b}, 0
)
console.log(`The second result is ${res}`);
//*Another Example:
const arr3 = [5, 6, 7]
const res2 = arr3.reduce( (a, b) => (a+b), 0 )
console.log(`The third result is ${res2}.`);

//* Real project Example:
const shoppingCart = [
  {
    itemName: "Python Course",
    price: 299
  },
  {
    itemName: "js Course",
    price: 999
  },
  {
    itemName: "cpp Course",
    price: 2000
  },
  {
    itemName: "java Course",
    price: 888
  }
]

const sumOfCarts = shoppingCart.reduce( (a, c) => (a + c.price), 0)
console.log(`The sum of Carts is ${sumOfCarts}!!`);