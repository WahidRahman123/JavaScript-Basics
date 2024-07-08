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