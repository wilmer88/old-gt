const Child = require("../child");

describe("Child", () => {

    it("should add name and age to the child constructor", () =>
    {

        const nene= new Child("wilmer",36);
        expect(nene.joto).toEqual("wilmer");
        expect(nene.monkeyAge ).toEqual(36)

    })

    it("should throw error if no arguments were added", () =>
    {
        const joto=() => new Child();
        
       

        expect(joto).toThrow()

    })

    it("should throw error if no age was added by using typeOf method", () =>
    {
       const noMonkeyAgeEntry = ()=> new Child("wilmer");
       const errorcito = new Error("Expected parameter 'age' to be a non-negative number");
        expect(noMonkeyAgeEntry).toThrowError(errorcito);
    })
    it("should throw error if no joto was added", () =>
    {
       const noMonkeyAgeEntry = ()=> new Child(35);
       const errorcito = new Error("Expected parameter 'name' to be a non-empty string");
        expect(noMonkeyAgeEntry).toThrowError(errorcito);
    })
    it("should throw error if monkeyage is not a number using isNaN", () =>
    {
       const noMonkeyAgeEntry = ()=> new Child("wilmer","32");
       const errorcito = new Error("Expected parameter 'age' to be a non-negative number");
        expect(noMonkeyAgeEntry).toThrowError(errorcito);
    })
    it("should throw error if jot is not a string", () =>
    {
       const noMonkeyAgeEntry = ()=> new Child(56,32);
       const errorcito = new Error("Expected parameter 'name' to be a non-empty string");
        expect(noMonkeyAgeEntry).toThrowError(errorcito);
    })
    it("should throw error if monkeyage is less than 0", () =>
    {
       const noMonkeyAgeEntry = ()=> new Child("wilmer",-1);
       const errorcito = new Error("Expected parameter 'age' to be a non-negative number");
        expect(noMonkeyAgeEntry).toThrowError(errorcito);
    })


  
});
