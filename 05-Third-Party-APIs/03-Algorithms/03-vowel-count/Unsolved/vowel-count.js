// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
    var cuenta = 0;
  var vowel = ["a", "e", "i", "o", "u"];
 
  
  for (var i = 0; i < str.length; i++) {
var better = str[i].toLowerCase()
if(vowel.indexOf(better) !== -1){
    cuenta ++
  } 
  
}
  return cuenta      }
