// reverse()
// Define a function reverse() that computes the reversal
// of a string. For example, reverse("jag testar")
// should return the string "ratset gaj".

function reverse (text) {
  var textArray = text.split('').reverse().toString().replace(/,/g, '')
  return textArray
}

console.log(reverse('Malta es uno de esos países en los que vivir es muy divertido'))
