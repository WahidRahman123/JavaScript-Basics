const user = {
  username: "Wahid",
  price: 999,
  welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`)
    console.log(this)
  }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

//console.log(this);

//* See the txt file.
//* 'this' in a Method and it is a keyword
//! The main work of 'this' is to refer object. 
/*When used in an object method, this refers to the object.
In the example on top of this page, this refers to the user object.

When used alone, this refers to the global object.
Because this is running in the global scope.
*/

// function fun(){
//   let username = "Wahid"
//   console.log(this);
//   console.log(this.username);     //! This will not work.
// }

// fun()

//or,

const fun = function () {
  let username = "Wahid"
  // console.log(this);
  //console.log(this.username)    //! This will not work.
}
fun()


//Arrow Functions:

/*
Declaration:
() => {}
or,
var/let/const var_name = () => {
  body
  }
*/
const func = () => {
  let username = "Raza"
  //console.log(this);
}

func()

//One line statement
//* ***We must write 'return' if we use {} here. For () or nothing, it is not needed.*** *//
const a = () => 3
console.log(a());

//or
const b = () => (5)
console.log(b());

//Object returning:
const c = () => ({username:"Wahid"})
console.log(c());
console.log(c(5, 5));     //* This cannot affect.