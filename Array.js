//EVERYTHING IN JS IS OBJECT
//OBJECT HAS METHIOD N PROPERTY

//ARRAY STORES THE VALUE BY INDEX
//              0       1       2      3     ------INDEX
let friends=["akash","nikhil","rutu","sudo"]
console.log(friends[0])
console.log(friends[1])
console.log(friends[2])
console.log(friends[4])

// initialization;conditioncheck;inc/dec
for(let i=0;i<4;i++){ //1 2 3 4 5         //we can take let i<5,6 also
console.log(i) //0 1 2 3 
}
for(let i=0;i<10;i++){
    console.log(i)
}
//            0        1       2        3
let fruits=["mango","orange","papaya","grapes"]
console.log(fruits[0])
for(let i=0;i<4;i++){
    //console.log(i)
    console.log(fruits[i])
    //1st i=0  2nd i=1   3rd i=2  4th i=3
}

let vegetables=["tomato","potato","carrot"]
console.log(vegetables[1])
                          //------------->1.property of array=length
let a = vegetables.length           //length RETURNS NO OF ELEMENTS OF ARRAY
console.log(a)

//METHODS
//ACTION-TO ADD THE ELEMENT IN THE ARRAY 
//RETURN-NEW LENGTH OF ARRAY

let b = vegetables.push("cabbage")   //.push()----->adds elemnts to the last of array & returns new length
console.log(b)
console.log(vegetables)

let c = vegetables.unshift("chilly")     //ADDS ELEM AT START OF ARRAY & returns new length
console.log(c)
console.log(vegetables)

let d = vegetables.pop() //pop("cabbage")------>REMOVES ELE FROM END & RETURNS/OP IT.THIS REMOVED ELEMT
console.log(d)
console.log(vegetables)

let e = vegetables.shift()      //REMOVE THE FIRST ELE FROM ARRAY AND RETURNS IT
console.log(e)
console.log(vegetables)   

//===============>>METHODS
//PUSH():ADD THE ELE AT LAST ----RETURNS NEW LENGTH
//UNSHIFT(): ADD ELE AT FIRST ----RETURNS NEW LENGTH
//POP():REMOVES LAST ELE FROM ARRAY----RETURNS IT(REMOVED ELE)
//SHIFT():REMOVES THE FIRST ELE ---RETURNS IT

//human--------->object
//property------->color,age,wt,height
//method-------->walk() talk()

//vehicle-------->object
//property------->modelno,color
//method-------->start(),stop()

//Bank------->object
//property---->accno,accname
//method------>deposit(),withdraw()

//gym---
//action---->weight,lift
//result------>muscles


