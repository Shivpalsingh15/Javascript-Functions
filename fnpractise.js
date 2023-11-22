//Practise functions

//Sum of Two Numbers.

function sum1(a, b) {
    return a+b;
}
console.log(sum1(2, 4))

//Substract of Two Numbers.


function sum2(a, b) {
  return a - b;
}
console.log(sum2(2, 4));

//Multiple of Two Numbers.


function sum3(a, b) {
  return a * b;
}
console.log(sum3(2, 4));

//Divide of Two Numbers.


function sum4(a, b) {
  return a / b;
}
console.log(sum4(2, 4));


//Print Hello Javascript

function js() {
    console.log("Hello Javascript")
 
}
js();

//the square of a number
function square(n) {
    return n*n ;
}
console.log('square:', square(6))


//convert Celsius to Fahrenheit
function CelsiustoFahrenheit(Celsius) {
  return ((Celsius* 9/5) + 32);
}
console.log("CelsiustoFahrenheit:", CelsiustoFahrenheit(6));

//the area of a given Rectangle

function areaofrect(l, b){
    return l*b
    
}
console.log('areaofrec:', areaofrect(15, 50))

//the area and perimeter of a Circle
function Circle(rad) {
  return `Area ${2*Math.PI*rad}`, `"Peremeter" ${Math.PI*rad*rad}`;
}
console.log("Circle:", Circle(10));

// generate a random number

function getrandom(start, end){
    return Math.floor(Math.random() *end )+ start
}
console.log('getrandom:', getrandom(1, 10))



// function getFactorial(num) {
//   if(num==1){
//     return 1; // Termination condition
//   }
//   if(num==0 || num<0){
//     return 0; // Termination condition
//   }
//   return num*getFactorial(num-1);
// }

// console.log(getFactorial(5)) // 120
// console.log(getFactorial(12)) // 479001600





