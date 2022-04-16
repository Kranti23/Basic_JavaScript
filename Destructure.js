// [11,22,33]==>> 11,23,44 ----Spread
// 11,22,33 ==>> [11,22,33]----Rest

//----------REST-------------
function add(a, b, c) {

    console.log(a + b + c)
}
add(12, 33, 23, 45, 67, 23, 45, 80, 89, 34)

function ADD(...r) {       //r is array returns array
    console.log(r)
    let sum = r.reduce((acc, el) => {

        return acc + el
    }, 0)
    return sum

}
let total = ADD(12, 34, 22, 33, 54, 78, 12, 9, 5, 45, 23, 36)
console.log(total)
console.log('-------------------')

//-----------------------------------------------------

// let ages = [15, 44, 34, 56, 78, 22, 43, 57, 89, 55, 97]
function above(a, ...arr) {         //...r ==> rest elements
    let kk = arr.filter(function (el) {
        return el > a

    })
    return kk
}
let rrr = above(45, 67, 89, 09, 23, 5, 6, 34, 45, 22, 11, 43, 88, 99)
console.log(rrr)


//=============== SPREAD ===================
let age = [12,45,23,18,54,33,8,34,31,39,76,51]

function Add2(a,b,c){
console.log(a+b+c)

}
//Add2(age[0],age[1],age[2])
Add2(...age)


//========================================

let numbers = [11,33,45,23,56,89,12,34,98,76,56]
function printArr(arr,fn){
let newArray = []
for(let i=0;i < arr.length; i++){
    newArray.push(fn(arr[i]))
}
    return newArray
}

let above18 = function(el){          //function
    return el > 18
}

let addTwo = function(el){
    return el + 2
}

let mulBy3 = function(el){

    return el * 3
}


let aa = printArr(numbers,above18)
let cc = printArr(numbers,addTwo)
let bb = printArr(numbers,mulBy3)

console.log(aa)
console.log(cc)
console.log(bb)