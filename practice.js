
function mul(p,q){       //function declaration
    return p*q
}
let a = mul(3,4)
console.log(a)

let mul1 = function(a,b){      //function expression
    console.log(a*b)
}
mul1(4,5)

let add=(x,y) => x+y        //arrow function
let k = add(3,6)
console.log(k)

let sub = (h,i) =>{
    return h-i
}
let b = sub(9,7)
console.log(b)

//----------OBJECTS-------------------------
let mobiles = {
    color : "blue",
    net  : "5G",
    warranty :2,
}

console.log(mobiles)      //retrieve
console.log(mobiles.color)

//update
mobiles.color = "red"
console.log(mobiles)
mobiles['net']  = "3g"
console.log(mobiles.net)

//add 
mobiles.speed = "240kbytes"
console.log(mobiles)

//delete
delete mobiles.net
console.log(mobiles)
delete mobiles.warranty
console.log(mobiles)

for(let a in mobiles){             
    console.log(a,mobiles[a])       //.dot notation doesn't work inside the loop
}

console.log(mobiles)

//--------------------------------------
let person ={
    name: "shaanty",
    age: 23,
    display:function(){
        console.log("declaration")
    }
}
console.log(person)
person.display()

let kkk = "arnab"
kkk.toUpperCase()
console.log(kkk)



