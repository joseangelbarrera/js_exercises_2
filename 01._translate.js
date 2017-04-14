// 2. `sum() & multiply()`

// 1. translate()

// Write a function translate() that will translate a text into
// "rövarspråket". That is, double every consonant and place
// an occurrence of "o" in between. For example, translate("this is fun")
// should return the string "tothohisos isos fofunon".

// I am going to use the method reduce
// Reduce produce a unique value operating with all the elements of an array.

var consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'w', 'x', 'y', 'z']

// translate = function (texto) {

// I put the string into an array

// I create a fiunction that search for consonants and change the findings for a new string

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
