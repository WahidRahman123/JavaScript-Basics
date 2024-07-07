const marvel_heros = ['ironman', 'captain america', 'hulk', 'thor']
const dc_heros = ['superman', 'batman', 'flash']
marvel_heros.push(dc_heros)
//Push actually push to the main array itself. i.e., it affects the main array.
//And it pushes the pushed array into the main array. It seems like *Array inside an Array*.

console.log(marvel_heros)
console.log(marvel_heros[4][2])

const b = marvel_heros.concat(dc_heros)
// concat does not affect any array. It simply concat the values of the array with the main array.
console.log(b)

// A better way to join or concat two arrays. ***Spread operator (...)***
/* There are three distinct places that accept the spread syntax: 
      1. Function arguments list (myFunction(a, ...iterableObj, b))
      2. Array literals ([1, ...iterableObj, '4', 'five', 6])
      3. Object literals ({ ...obj, key: 'value' })
*/

const all_new_heros = [...marvel_heros, ...dc_heros, 'hello world']
console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12]], 5]

const usable_another_array = another_array.flat(Infinity)
// const usable_another_array = another_array.flat(1)
// const usable_another_array = another_array.flat(2)

console.log(usable_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Wahid"))    //Converts string into an array.

//* Interesting Case:
console.log(Array.from({name: 'Wahid'}))    //It cannot directly convert the object into array.
//We have to specify the which should be converted into an array. Keys or values.

//Converting multiple variables into an array
let score1 = 100
let score2 = 200
let score3 = 300
//Have to use 'of' instead of 'from'
console.log(Array.of(score1, score2, score3));