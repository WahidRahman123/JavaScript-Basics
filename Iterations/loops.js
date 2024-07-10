/* For loops declartion:
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}*/


//* For Array only:
//* forEach is a method used with arrays.
//* It doesn't return anything.
/* forEach declaration:
    array.forEach(element => {
        body
      });
*/
//*For Array, Map and Strings:
//! of doesn't work on objects.
/*
  for(var1 of array_strings)
  {
    body
  }
*/

//* For Objects:
/*
  Other two:
  for(var1 in object){          //* returns keys in var1
    body
  }
  //* Also in array, it returns the index numbers which starts from 0.
*/


const arr = [12, 15, 35, 88, 70, 40]

arr.forEach((element, a, b) => {
  console.log(a + b + element);
});

for(const a of arr)
{
  //console.log(a);
}

//* In:
//*======
//* Returns keys
const obj1 = {
  name: "Wahid",
  age: 25
}

for (const a in obj1){
  console.log(a);
}
//* For values
for (const a in obj1)
{
  console.log(obj1[a]);
}

for (const b in arr)
{
  console.log(b);
}
for(const b in arr)
{
  console.log(arr[b]);
}


//* while loops:
/*while (condition) {
  
}*/

//* Do while:
/*do {
  
} while (condition);*/

//* Maps: Map is an object and renowned for unique keys and values.
//*---------------------------------------------------------------
//Map Declaration:
const map1 = new Map();
map1.set("Wahid", 20);
map1.set("Mehedi", "25");
map1.set("Maisha", "25");

console.log(map1);

//* Using loop in maps:
for(const a of map1)
{
  console.log(`Map ${a}`);
}

//! Intersting:
for(const [a, b] of map1)
{
  console.log(`Key is ${a} and Value is ${b}`);
}
//*---------------------------------------------------------------

//* Practice session:
//*-------------------
/*const va3 = [8, 12, 9, 444]
const object1 = {
  username: "WahidRahman123",
  repository: 52
}

console.log(Object.keys(object1).length);

for(let a in object1)
{
  console.log(a);
}

for(let a in va3)
{
  console.log(a);
}
for(let a of va3)
{
  console.log(a);
}
const b = "Wahid Rahman"
for(let a of b)
{
  console.log(`Char: ${a}`)
}

va3.forEach(a => {
  console.log(`Value: ${a}`);
});*/