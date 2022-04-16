
function oper(a, b) {
    console.log(a + b)
    return 24                 //return ke sath funct close hota hai
    console.log(a * b)      //this will not work---after return kuch bhi print nhi hoga
}
let kk = oper(30, 56)    //86  
console.log(kk)                         //and returns 24
//oper(30,56) ----->86               just oper hoga return 24 nhi



//------------CLOSURE--------------

function addition(x, y) {
    // let x = 22;
    // let y = 10;
    return function () {

        console.log(x + y)
        return x + y 

    }
}
let pp = addition(23, 21) 
console.log(pp)                                     // gives return = funct(){}
pp()                                 // return cha function ahe so call kela prt to get value ----44

//  pp = function () {

//     console.log(x + y)
//     return x + y
// }
let op = pp()
console.log(op)
// let x = 10
// console.log(pp)


//------------FUNCTION KE ANDAR LOOP
function person(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
person(["Me", "Nikhil", "Prasad"])


//--------LOOP KE ANDAR FUNCTION
for (let i = 0; i < 3; i++) {

    function word() {

        console.log("HELLO FRIENDS")
    }
    word()
}

console.log("-------------------------")

let mul = function(p,q){

     function mul2(rr,ss){
       console.log(rr*ss)
     }
    mul2(5,2)           //function closed
    return p*q            //pehle funct ke variables accessible hai function ke end hone pe bhi bcz of closures
}
let aaa = mul(4,7)
console.log(aaa)






