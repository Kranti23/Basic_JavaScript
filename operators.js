// COMPARISON OPERATORS
// a < b ==============>> always gives boolean (T/F)

// <,>,<=,>=,==,!=, ===,!==

console.log(6 < 3)           //F
console.log(6 > 3)           //T
console.log(6 >= 6)          //T
console.log(6 <= 5)        //F
console.log(6 == 6)         //T
console.log(6 != 7)        //T

let a = 30
console.log(typeof a)
let h = '30'
console.log(typeof h)

//console.log( a == h)
console.log(30 == '30')         //ABSOLUTE VALUE
console.log(30 === '30')        //ABSOLUTE VALUE & TYPE

console.log(6 === 6)  //T
console.log(3 == '3')  //T
console.log(8 === 7)  //F
console.log(7 == '6')  //F
console.log(3 != '3')  //F
console.log(3 !== '3')  //T
console.log(7 !== 7)    //F
console.log(6 != '6')  //F
console.log(4 !== '4') //T

//AND OR NOT OPERATIONS
console.log(7 > 6 && 7 !== '7')     //t&t=t
console.log(7 !='6' && 8 == 9)      //t&f=f
console.log(8 !=='8' || 7 === 7)    //tort=t
console.log(7 =='6' || false)          //f||f=f
console.log(!false)  //T
console.log(!true)   // F

//CONDITIONAL STATEMENTS -->> single ip ke liye multiple op
 let n =10
let numberofticket = n
//let numberofticket =10
if(n >= 10){
    console.log('30% discount')
}
else{
    console.log('10% discount')
}