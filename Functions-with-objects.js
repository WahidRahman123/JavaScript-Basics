//... or the rest operator says that pack all the arguments and pass them into num1.
function calculateCartPrice(...num1){
  return num1
}

console.log(calculateCartPrice(2));
//Another scenerio:
function calculateCartPrice2(val1, val2, ...num1)
{
  return num1
}
console.log(calculateCartPrice2());
console.log(calculateCartPrice2(10));
console.log(calculateCartPrice2(10, 20));
console.log(calculateCartPrice2(10, 20, 30));
console.log(calculateCartPrice2(10, 20, 30, 40));
console.log(calculateCartPrice2(10, 20, 30, 40, 50));


//Object return:
const user = {
  username: "wahidrahman123",
  price: 199
}
//1st:
function handleObject(anyobject){
  return anyobject
}

console.log(handleObject(user))
//2nd:
function handleObject2(anyobject)
{
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`);
}
handleObject2(user)
handleObject2({
  username: "Raza",
  price: 250
})

//Array passing in object:
const arr = [1, 2, 3, 4, 5]
function fun_for_array(a){
  return a[2]
}

console.log(fun_for_array(arr))
console.log(fun_for_array([10, 20, 5, 0]))