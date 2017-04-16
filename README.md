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
```


## 2. `sum() & multiply()`

Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

***solution***

```function reverse (text) {
  var textArray = text.split('').reverse().toString().replace(/,/g, '')
  return textArray
}

console.log(reverse('Malta es uno de esos países en los que vivir es muy divertido'))
```


## 3. `reverse()`

Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

***solution***

```oooo
```


## 4. `translate()` 

Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.

***solution***

```oooo
```


## 5. `findLongestWord()`

Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
Define a function called ​isString​ that receives a value and return true if the value received is a string

***solution***

```oooo
```


## 6. `filterLongWords()`

Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

***solution***

```oooo
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


