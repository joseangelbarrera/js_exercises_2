// 6. filterLongWords()

// Write a function filterLongWords()
// that takes an array of words and an integer i
// and returns the array of words that are longer than i.

var filterLongWords = function (test, i) {
  return test.filter(function (element) {
    return element.length > i
  })
}

var arrayToTest = ['la casa', 'la pecera de juan', 'la viejaseñora', 8]
var i = 10
filterLongWords(arrayToTest, i)
