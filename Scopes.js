if(true)
{
  let a = 20
  var b = 10
  const c = 30
}

//console.log(a);
//console.log(b);
//console.log(c);

//A scenario:
function one(){
  const username = "Wahid"

  function two(){
    const website = "YouTube"
    console.log(username)
  }

  //console.log(website)
  
  //two()

  //console.log(website);

}
//two()
one()

//====================Interesting====================//
console.log(addOne(6));
function addOne(num1)
{
  return num1 + 1
}


//or
//addtwo(5)
const addtwo = function(num){
  return num + 2
}
//This is called expression.
//! Important: this Expression cannot be called before its declaration. See Hoisting topic.
//*------------------------------------------------------------------------------------------------//
//* ***JavaScript only hoists declarations, not initializations(it is the first value assignment).*//
//*------------------------------------------------------------------------------------------------//

//addtwo(5)