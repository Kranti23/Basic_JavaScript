// let array = ["me","nikhil","ruhi"];
// // let result = array.reverse()

// // console.log(result)
// console.log(array.reverse())

let dost = {
    name: "Nikhil",
    age: 28,
    place:"akola"

}

console.log(dost.place)
console.log(dost['age'])

dost.name = "Kunal"
console.log(dost)

dost.hobby = "photoholic"
console.log(dost)

delete dost.age
console.log(dost)

//for(let a in dost)
for(let key in dost){

console.log(key,dost[key])
}


let aaaa = "tickets"
 let tickets = 10
//let aaaa = tickets 

if(aaaa <= 5){
   console.log("5% discount")
}
else if(aaaa <= 10) {
    console.log("10 % discount")
}
else{
    console.log("20% discount")
}






