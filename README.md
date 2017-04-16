# Javascript Exercises

## 1. `translate()`

Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

***solution***

```
var consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'w', 'x', 'y', 'z']
// translate = function (texto) {

// I put the string into an array to apply his methods

// I create a fiunction  that compare letters searching for consonants and changing the findings for a new string

var translate = function (texto) {
  var newText = texto.split('')

  for (var j = 0; j < newText.length; j++) {
    var letter = newText[j]
    var newLetter = letter
    for (var i = 0; i < consonant.length; i++) {
      if (consonant[i] === letter) {
        newLetter = letter + 'o' + letter
      } else {
        newLetter === newText[j]
      }
    }
    newText.splice(j, 1, newLetter)
  }
  var translation = newText.join()
  console.log('This is the original text: \n' + texto + '\n')
  console.log('This is the translation: \n' + translation.replace(/,/g, ''))
}

translate('No puede ser que esto se haga así tiene que haber un truco para hacerlo más rápidamente.')

another solutoion (the beter from our Teacher JuanMa):
function translate (text) { return text.replace(/([b-df-hj-np-tv-xz])/g, '$1o$1') }
```


## 2. `sum() & multiply()`

Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

***solution***

```
function suma () {
  arguments = []
  return arguments.reduce(function (accumulator, currentValue) { return accumulator + currentValue }, 0)
}

console.log(suma(4, 5, 6, 7, 8, 9))

var sum = function () {
  return [4, 5, 6, 7, 8, 646, 89, 54764, 9].reduce(function (accumulator, currentValue) { return accumulator + currentValue }, 0)
}

console.log(sum())

var multiply = function () {
  return [4, 5, 6, 7, 8, , 646, 89, 54764, 9].reduce(function (accumulator, currentValue) { return accumulator * currentValue }, 1)
}

console.log(multiply())

```


## 3. `reverse()`

Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

***solution***

```
function reverse (text) {
  var textArray = text.split('').reverse().toString().replace(/,/g, '')
  return textArray
}

console.log(reverse('Malta es uno de esos países en los que vivir es muy divertido'))
```


## 4. `translate()` 

Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.

***solution***

```
// First, I create the object

var objectTranslate = {'merry': 'god', 'christmas': 'jul', 'and': 'och', 'happy': 'gott', 'new': 'nytt', 'year': 'år'}

// I convert the values of the Onject into an Array:

var translatePreview = Object.keys(objectTranslate).map(function (key) { return objectTranslate[key] })

// ==> [ 'god', 'jul', 'och', 'gott', 'nytt', 'år' ]

// I create a variable that collet all the elements of the array
// into a string with the method reduce

var translate = function() {return translatePreview.reduce(function (preview, current, index) { return preview + ' ' + current })}


// ==> god jul och gott nytt år
```


## 5. `findLongestWord()`

Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

***solution***

```
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
```

Define a function called ​isString​ that receives a value and return true if the value received is a string

```
// Define a function called isString that receives a value and return true
// if the value received is a string

var isString = function (text) { if (typeof (text) === 'string') { return 'true' } else { return 'false' } }

```


## 6. `filterLongWords()`

Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

***solution***

```
var filterLongWords = function (test, i) {
  return test.filter(function (element) {
    return element.length > i
  })
}

var arrayToTest = ['la casa', 'la pecera de juan', 'la viejaseñora', 8]
var i = 10
filterLongWords(arrayToTest, i)

// ==> ["la pecera de juan", "la viejaseñora"]

```


## 7. `charFreq()`


Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").


```+++++
```

// 

## 8. encodeWordPlus

Improve the previous function to add a random number between 0 and 1000 every 7 characters

***solution***

```00000000 
```


