// 2. `sum() & multiply()`

// Define a function sum() and a function multiply() that sums and
// multiplies (respectively) all the numbers in an array of numbers.
// For example, sum([1,2,3,4]) should return 10,
// and multiply([1,2,3,4]) should return 24.

// I need some hel to convert the arguments objecto into an array because
// otherways it does not work.

function suma () {
	arguments = []
  return arguments.reduce(function (accumulator, currentValue) { return accumulator + currentValue }, 0)
}

console.log(suma(4, 5, 6, 7, 8, 9))

// looking bellow, the method we would use is 'reduce', rigth?

var sum = function () {
  return [4, 5, 6, 7, 8, 646, 89, 54764, 9].reduce(function (accumulator, currentValue) { return accumulator + currentValue }, 0)
}

console.log(sum())

var multiply = function () {
  return [4, 5, 6, 7, 8, , 646, 89, 54764, 9].reduce(function (accumulator, currentValue) { return accumulator * currentValue }, 1)
}

console.log(multiply())
