// Write a function that takes in an array of digits representing a non negative integer and add one to it. The digits are arranged such that the most significant digits are on the left and each element in the array contains a single digit
// Return the new array
// Solve without joining the digits array and modify the original array in place


// var plusOne = function(digits) {
//   var carry = 1;

//   for (var i = digits.length - 1; i >= 0; i--) {
//     var plusOne = digits[i] + carry;
//     var sum;
//     carry = 0;

//     if (plusOne > 9) {
//       carry = 1;
//       sum = 10 - plusOne;
//     } else {
//       sum = plusOne;
//     }

//     digits[i] = sum;
//   }

//   if (carry) {
//     digits.unshift(carry);
//   }

//   return digits;
// };

var plusOne = function(digits) {
  
  if(digits[digits.length -1] == 9){

    console.log("entered case");


    for(let i = 0; i < digits.length; i++){
      if(digits[digits.length -1]== 9 || digits[digits.length -2] == 9 || digits[digits.length -2] == 9 ){
        digits[digits.length -1] = 0;
        digits[digits.length -2] = 0;
      };
   };

   digits.unshift(1);
     return digits;
  };

  if (digits.length > 0) {
    digits[digits.length -1] = digits[digits.length -1] + 1;
    return digits

  }
  
  if(digits.length == 0){
    // console.log(digits)
    digits.push(1) ;
    return digits

  }





  

  
  

  




 

//     //   console.log(digits[i].split())

//     //   // digits[i].forEach(element => {
//     //   //   element = element + 1
  
//     //   // });
      
//     //   // return console.log(digits)
    
      
    // }
    
  
 

  
    





  // 
  // if(digits.length == 0){
  //   return digits[1]
  // }
   
  //  for(let i=0; i < digits.length; i++){
  //   console.log(digits[i])

  //  }
  //  return digits

//    () =>
//      digits.pop();
//      console.log(digits);
 
// () =>
//  digits.unshift(1);
//  console.log(digits);

// return console.log(digits);
 
};


// var plusOne = function(digits) {
//    console.log(digits);
//    () =>
//      digits.pop();
//      console.log(digits);
 
// () =>
//  digits.unshift(1);
//  console.log(digits);
 
// };
