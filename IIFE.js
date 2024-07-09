(function fun() {
  console.log("Hello World");
})();     //This called named IIFE

//or using arrow function

(() => {
  console.log("Wahid Rahman");
})();     //This is simple or unnamed IIFE

//with parameters:
((age) => {
  console.log(`Hi my age is ${age}`);
})(24);

//Another
((name, age) => {
  console.log(`${name} my age is ${age}`);
})("Wahid Rahman Raza", 24);