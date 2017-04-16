// 5. findLongestWord()

// Write a function findLongestWord()
// that takes an array of words and returns the length of the longest one.

// 1º I create a Funtion that convert an array of strings into
// another array namen 'values' with the length of every element of the string.

// 2º I 'sort' from less to more the elements of 'values'
// and select the last one because is the bigger one

var findLongestWord = function (array) {
  var values = []
  array.forEach(function (element, index) {
    var value = element.length
    values.push(value)
  })
  values.sort(function (a, b) { return a - b })
  return values.slice(values.length - 1).toString()
}

// with this array:
// var arrayOfWords = ['la casa', 'la pecera de juan', 'la viejaseñora' ]
// findLongestWord(arrayOfWords)
// ==> 17

// Define a function called isString that receives a value and return true
// if the value received is a string

var isString = function (text) { if (typeof (text) === 'string') { return 'true' } else { return 'false' } }
