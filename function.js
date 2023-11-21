// what is functions ?? block of code which can be excuted st any time , reuseable code whenever need we can call this function and do our work.

// snytax keyword function followed nsme of function name then() { insode here our code which is going to excute } exmaple

function myfun() {
  // our code here
}

// note whenever we want to use this function we havw to call this function or invoke this functions
// there re 2 types of function acc to syntax
// ES6 arrow function
const myfunc2 = () => {};
const myfunc3 = () => {};

// when you are using {} we have to use return keyword
// return keyword very useful and imp fucntion are used to return somthing so we use return keyword if this keyword is used then we have to catch the output of fucntion in some varible if keyword is not used no need to catch ex below
// with return keyword
function one() {
  return "hey vaibhav";
}
let ans = one(); // we re callig this function
console.log("ans:", ans); // here we are catching our output in the ans varible
// without return keyword
function two() {
  console.log(10 + 20);
}
two(); // we are not using return keyword so no need to catch in any vaible

// differ in arrow function and normal funcitons

// concept of hoisting
shiv();
function shiv() {
  console.log("I am normal function");
}
const shiv2 = () => {
  console.log("I am arrow function");
};
shiv2();

// ::: argument and parameter wht is this 2 things in function :::::

//  parameter : it is somethig tht while creating  a function we are passing insde prarenthesie () it can be x ,a ,c anything this is used insode the function ex:    function myfun1(parameter){
// console.log(parameter)
// }  myfun1(parameter)

// argumemt : it is somthing tht we are passing while invokign / calling function respect to parameter  ex : myfunc('hellow world')

function demo(param1, param2) {
  console.log(param1 + param2);
}
demo(20, 20); // 20 and 20 are argument passed respect to param1 and param2

// use of argument and parameter
function calulator(opertion, digit1, digit2) {
  // //   if (opertion == "addition") {
  // //     // console.log(digit1 + digit2);
  // //     return digit1 + digit2;
  // //   } else if (opertion == "substraction") {
  // //     // console.log(digit1 - digit2);
  // //     return digit1 - digit2;
  // //   } else {
  // //     // console.log(`pls check opertion "${opertion}" not allowed`);
  // //     return `pls check opertion "${opertion}" not allowed`;
  // //     // console.log("pls check opertion " + opertion + "not allowed");
  //   }
}
let myoutput = calulator("sustraction", 20, 30);
// console.log("myoutput:", myoutput);

function demo(a, b, c) {
  console.log(a);
}
demo("nil", "shipu", "vaibhs");

// write a program / fuction to sum all ele of arr

function sumOfArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(sumOfArr(passingArr()));

function passingArr() {
  return [1, 2, 3];
}


// The main difference between map and forEach is that the map method returns a new array by applying the callback function on each element of an array, while the forEach method doesn't return anything.
// Here is a table summarizing the key differences between forEach and map:
// Property
// forEach
// map
// Return value
// undefined
// new array
// Immutability
// Mutates the original array
// Immutable
// Chaining
// Not chainable
// Chainable


