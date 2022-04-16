// // function declaration 
// function add(a,b)
// {
//     s = a+b
//     return s
// }
// let k= add(3,4)
// console.log(k)

// //function expression
// let ADD = function(x,y){
//     return x+y
// }
// let kk=ADD(6,8)
// console.log(kk)

// //arrow function
// let sub = (a,b)=>{
//    return a-b
// }
// let j=sub(10,4)
// console.log(j)

// let add2=(x,y)=>x+y
// let jk=add2(5,7)
// console.log(jk)

// //PASSING NUMBER TO THE FUNCTION
// function mul(a,b){
//     console.log(a*b)
//     return a*b
// }
// let h=mul(6,7)
// console.log(h)

//PASSING THE STRING VALUE TO THE FUNCTION
    
//allowed(false)

//FUNCTIONS AS A PARAMETER TO ANOTHER FUNCTION
let substraction=function(x,y){
    return x-y
}
function sub2(fn){
// let fn=function(x,y){
//     return x-y
// }
  let h=fn(12,6)
  return h //6
}

let k=sub2(substraction) //6
console.log(k)  //6

//FUNCTION OBJECT

let person={
    name:"NIK",
    age:23,
    skills:[2,11,33,44]

}
for(let key in person){
    console.log(key,person[key])
}

//OBJECT AS A PARAMETER TO THE ANOTHER FUNCTION
function obj(ka){
   for(let key in ka){
       console.log(key,ka[key])
   }
}
obj(person)

//ARRAY AS A PARAMETER TO ANOTHER TO FUNCTION
let fruits=["mango","orange","banana"]
function printArr(arr){
for(let i=0;i<printArr.length;i++){
    console.log(arr[i])
}
}
printArr(fruits)




