/*Declaration:
  function function_name(){
    body
  }
  *With parameter:
  function function_name(param1, param2){       //* Do not need the data types of params
    body
  }
*/
function fun(){
  console.log("W");
  console.log("a");
  console.log("H");
}

//Execution:
//fun()
//! Reference:
//fun 

function addtwo(number1, number2)
{
  console.log(number1 + number2); 
}
addtwo(1, "a");
addtwo(1, null);

function addThreeNumber(num1, num2, num3){
  let result = num1 + num2 + num3
  console.log("The result called as ");
  return result
}

const value = addThreeNumber(5, 6, 8)
console.log("Value:", value);

//Another test:
function loginUserMessage(username){
  /*if(username === undefined)
  {
    console.log("Please enter a username.");
    return 
  }*/
  if(!username)
  {
    console.log("Please enter a username.");
    return ''
  }
  return `${username} just logged in.`
}
console.log(loginUserMessage());

//Function with default parameter:
function userLogin(para = "Unnamed")
{
  return `${para} just logged in.`
}

const value1 = userLogin()
const value2 = userLogin("Wahid")
console.log(value1)
console.log(value2)