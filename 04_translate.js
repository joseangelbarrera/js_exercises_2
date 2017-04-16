// ## 4. translate()

// Represent a small bilingual lexicon as a
// Javascript object in the following fashion
// {"merry":"god", "christmas":"jul", "and":"och", "happy":gott",
// "new":"nytt", "year":"år"} and use it to translate your Christmas
// cards from English into Swedish.
// First, I create the object

var objectTranslate = {'merry': 'god', 'christmas': 'jul', 'and': 'och', 'happy': 'gott', 'new': 'nytt', 'year': 'år'}

// I convert the values of the Onject into an Array:

var translatePreview = Object.keys(objectTranslate).map(function (key) { return objectTranslate[key] })

// ==> [ 'god', 'jul', 'och', 'gott', 'nytt', 'år' ]

// I create a variable that collet all the elements of the array
// into a string with the method reduce

var translate = function () { return translatePreview.reduce(function (preview, current, index) { return preview + ' ' + current }) }

translate()
// ==> god jul och gott nytt år
