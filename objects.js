// singleton - created by constructor method:
//Object.create


// Object literals:
const JsUser = {
  name: "Wahid",
  age: 24
}

// Value changing:
JsUser.name = "Rahman"
JsUser["age"] = 25

// Locking the object itself:
Object.freeze(JsUser)
JsUser["age"] = 30

console.log(JsUser["age"])

// Two ways to access:
// 1st
console.log(JsUser.name);

// 2nd and the preferred way:
console.log(JsUser["name"]);  //* Preferred way
//* Why? Because 
const JsUser1 = {
  "Full Name": "Md Wahid Rahman"
}
console.log(JsUser1["Full Name"]); //* dot way will not work here


//* Symbol declaration in object:
// 1st normally declare symbol:
const mySym = Symbol('key1');

const obj1 = {
  [mySym]: "value"  //! Important
}

//Accessing it:
console.log(obj1[mySym]);   //! Important

//New value add:
obj1.greeting = function(){
  console.log("Hello World!");
}

//* Two ways for calling the function of an object.
obj1.greeting()
// or
console.log(obj1.greeting);     //Output: Function (anonymous)


//-------------------------------------------------------------//
obj1.Name = "Raza"
obj1.Age = 25
obj1.greetingtwo = function(){
  console.log(`Hello! My name is ${this.Name} and My age is ${this.Age}.`)  // Indicating the keys are from this object.
}

obj1.greetingtwo(); 
console.log(obj1.greetingtwo());    // Console log will result to see an extra 'undefined' result value.


//===================Part-Two======================//
//Singleton Object

// const instaUser = new Object()
const instaUser = {}
instaUser.Name = "Wahid"
instaUser.Age = 28
instaUser.id = "12345ab"

console.log(instaUser);

//Nested Object
const anotherUser = {
  MainName: "Another User",
  fullname:{
    userfullname:{
      firstname: "Wahid",
      lastname: "Rahman"
    }
  }
}
console.log(anotherUser.fullname.userfullname.lastname);

// Combining Objects
const obj2 = {1:"a", 2:"b"}
const obj3 = {3:"c", 4:"d"}

//Combining is same as an array.
const obj4 = {obj2, obj3}
console.log(obj4.obj2['1'])

//Another way Object.assign(target, source):
const obj5 = Object.assign({}, obj2, obj3)
console.log(obj5)

//Another way spread operator:
const obj6 = {...obj1, ...obj2, ...obj3}
console.log(obj6);

//Array of objects:
const users = [
  {
    id: 1, 
    email: "lakjfdlajf"
  },
  {
    id: 2,
    email: "khslkff"
  }
]

console.log(users[1].email);

//! Object.keys
console.log(Object.keys(instaUser));    //* Returns array of keys
console.log(Object.values(instaUser));  //* Returns array of values
console.log(Object.entries(instaUser));  //* Returns array of arrays each of which contains key & value pair.

//! checking a property exists or not.
console.log(instaUser.hasOwnProperty('Age'));
console.log(instaUser.hasOwnProperty('islogged'));

//* Object de-structure
const course = {
  coursename: "CSE",
  price: "999",
  courseInstructor: "Wahid Rahman"
}

// const {the-key-name-which-I-want-to-extract} = the-object-name                   --default
// const {the-key-name-which-I-want-to-extract: the-new-name} = the-object-name     

const {courseInstructor} = course
const {coursename: Name} = course
//For this, we just only have to write 'courseInstructor' to access it next time.
console.log(courseInstructor);
console.log(Name);


/*JSON is object without a name or without a variable and the keys are in string format.
{
  "name": "Md Wahid Rahman",
  "coursename": "JavaScript",
  price": "free"
}

Also an array without a name or variable can contain multiple objects without a name or variable. Such as -
[
  {},
  {},
  {}
]
*/

