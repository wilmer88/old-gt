const DayCare = require("../dayCare");
const Child = require("../child");

describe("DayCare", () => {
    describe("Initialization", () => {
        it("should create an instance of daycareObject with {children = [], capacity = 3, ageLimit = 39",()=>{
            const TCare= new DayCare();
            expect(TCare).toEqual({children:[], capacity:3, ageLimit:36});
        });
    });

    describe("addChild", () => {

        it("should add Child Object to children array",()=>{
            const changito = new Child("wilmer", 34);
            const TCare= new DayCare();
            TCare.addChild(changito);
            expect(TCare.children.length).toEqual(1);
            expect(TCare.children[0]).toBe(changito);
        })
        it("should not allow to add child if over age limit",()=>{
            const chango = new Child("wilmer", 71);
            const otherCare= new DayCare();
            otherCare.addChild(chango);
            expect(otherCare.children.length).toEqual(1);
        });
        it("should not add child if at capacity",()=>{
            const chango1= new Child("ben", 21);
            const chango2= new Child("goku", 31);
            const chango3= new Child("joe", 34);

            const otherCare= new DayCare();
            otherCare.children=[
                chango1,
                chango2,
            ]
            otherCare.addChild(chango3);
            expect(otherCare.children.length).toEqual(3);
        })
        it("should throw error if not provided  child object as an argument",()=>{
            const callback1 = ()=>{
                const otherCare= new DayCare();
                otherCare.addChild();
            }
           const errToThrow = Error("Expected parameter 'child' to be an instance of Child");
       
            expect(callback1).toThrowError(errToThrow);
        });
    
    });
    describe("pickupChild", () => {
        it("should remove child from index array if name is found and return it",()=>{
            const chango1= new Child("ben", 21);
            const chango2= new Child("goku", 31);
            const chango3= new Child("joe", 34);
            const otherCare= new DayCare();
            otherCare.children=[chango1,chango2,chango3]
           const parentPickup =  otherCare.pickupChild(chango1.name);
            expect(parentPickup).toEqual(chango1);
            expect(otherCare.children.length).toEqual(2);
            expect(otherCare.children.some(changito =>{changito.name === chango1.name})).toEqual(false)

        });
        it("should return undefined and remove no children if child is not in children",()=>{
            const chango1= new Child("ben", 21);
            const chango2= new Child("goku", 31);
            const chango3= new Child("joe", 34);
            const otherCare= new DayCare();
            otherCare.children=[chango1,chango2,chango3]
           const parentPickup =  otherCare.pickupChild("felix");
            expect(typeof parentPickup).toEqual("undefined");
            expect(otherCare.children).toEqual([chango1,chango2,chango3]);


        });
    });

});


