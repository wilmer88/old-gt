// Write a function that takes in a string and and an offset and returns a new string with each character moved by the offset

// var caesarCipher = function(str, offset) {
//     let alphabet = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
// let neworder = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
// let shifted = alphabet[offset]
// for(let i = 0; i < neworder.length; i++ ){
    

// }
    

// };
var caesarCipher = function(str, offset) {
    // console.log(offset);
    var result = "";
  
    while (offset < 0) {
      offset = 26 + offset;
    // console.log(offset);
    // return console.log(offset);
    }
    // console.log(offset);

    // console.log(offset);
  
    
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
    // console.log(char);
    // console.log(char.charCodeAt(0));


      var charCode = char.charCodeAt(0);
    // console.log(offset);

      var offsetChar = char;
  
      if (charCode >= 65 && charCode <= 90) {
        offsetChar = String.fromCharCode(((charCode - 65 + offset) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        offsetChar = String.fromCharCode(((charCode - 97 + offset) % 26) + 97);
      }
  
      result += offsetChar;
    }
  
    // return result;
   
    // return console.log(offset);
  };
  