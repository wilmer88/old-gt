const numbers = [1,2,3,4,5,4];

const mapvar = new Map()

// console.log(mapvar)





for(let i = 0; i < numbers.length; i ++){
    if(mapvar.has(numbers[i])){
        console.log("duplicate number is: " + numbers[i])
// console.log(mapvar)

    }else{
        mapvar.set(numbers[i], true)
// console.log(mapvar)

    }

}