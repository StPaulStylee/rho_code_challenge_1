// 1 - Add the value 32 to the end of the following array.

var arr = [3, 4, 6, 0];

// 2 - Remove the values 4 & 6 from arr using the splice method.

// 3 - Use the sort method to order each array value from smallest to largest.

/*
4 - Use the map method to halve the value of each value in the array.
Assign the result to a new array called newArr. Console.log the new array.
*/

arr.push(32);
arr.splice(1,2);
arr.sort(function(a, b) {
  return a - b;
});

var newArr = arr.map(function(arr) {
  return arr / 2;
});
