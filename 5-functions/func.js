// 1 - Write a function declaration that takes no arguments and returns the value 4

/*
2 - Write a function declaration that takes two arguments and returns the value
    of the result of the multiplication of both arguments
*/

// 3 - Write a function expression that takes one argument and console logs that value.

// 4 - Write a function declaration that takes a number and divides it by two.

/*
5 - Call the function from 4 and pass it into the function from 2 called with
    the arguments 10, 20. Console log the result.
*/
//1
 var myFunction = function() {
  return 4;
};
//2
var itTakes2 = function (a, b) {
  return a * b;
};
//3
//Ahhh... I don't get it. Is this possible?

//4
var itDivides2 = function(a) {
  return a / 2;
};
//5
console.log(itDivides2(itTakes2(10, 20)));
