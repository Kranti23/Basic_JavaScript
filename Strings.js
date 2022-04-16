//------Strings --->>Collection of characters ===>object
///Strings stores the vale by index
         //0 1 2 3
let city = "Pune"
let person = "Chinmay"
//console.log(city[1])

for(let j = 0 ; j<person.length ; j++){
    console.log(person[j])
}

//MEthod ===>>(String/regrex)
let fruit = "Mango"
console.log(fruit.length)                       //property

console.log(fruit.toUpperCase())                 //method
let a = fruit.toLowerCase()
console.log(a)

let b = fruit.startsWith('A')
console.log(b)

let c = fruit.endsWith("o")
console.log(c)

//--------------to count no of letters-------------------------
let vegetable = "Cabbage"
let count = 0 ;

for(let i=0;i<vegetable.length;i++){
//console.log(vegetable[i])
     if(vegetable[i]=='a'){
         count = count + 1 ;
     }
 
}
console.log(count)  
console.log("--------------------------------")

let friend ="Nikhil kichambare"
//let rr = friend.indexOf('k')
let rrr = friend.indexOf('k',2)
console.log(rrr)

let ppp = friend.includes('kra')
console.log(ppp)

let pp = friend.includes('il ki')
console.log(pp)

let d = friend.charAt(3)
console.log(d)


// let kk = friend.split('')          //returns array
// console.log(kk)

let kkk = friend.split('a')
console.log(kkk)

let kkkk = friend.split('ik')
console.log(kkkk)

let bbb = friend.split('')
console.log(bbb)


let bbbb = friend.split('--')
console.log(bbbb)









