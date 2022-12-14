const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("should take a string as an argument and return a new reversed version of the string", ()=>{
      const givenString= "joto";
      const result = new Algo().reverse(givenString);
      const reverseString= "otoj";
      expect(result).toEqual(reverseString);
    })

  });

  describe("isPalindrome", () => {
    it("should return true if given string is a palindrome", ()=>
    {
      const givenTestString = "civic";
      const result = new Algo().isPalindrome(givenTestString);
      expect(result).toEqual(true);
    })

    it("should return fale if given string is not a palindrome", ()=>
    {
      const givenTestString = "chango";
      const result = new Algo().isPalindrome(givenTestString);
      expect(result).toEqual(false);
    })
   
  });

  describe("capitalize", () => {
    it("should retur capitalize letter of each word", () => 
    {
      const phraceToUse = "changito loves coding";
      const wordsSplittedInArray = "Changito Loves Coding";
      const result = new Algo().capitalize(phraceToUse);
      expect(result).toEqual(wordsSplittedInArray);
    })
     
  });
});
