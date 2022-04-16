
// //function declaration
// function college(){
//     console.log("COEP")
// }
// college()

// //function expression
// ADD=function(x,y){
//     s=x+y
//     return s
// }
// let k=ADD(5,8)
// console.log(k)

// //ARROW FUNCTION
// let ADD1=(x,y)=>{
//     s=x+y
//     return s
// }
// let kk=ADD1(5,8)
// console.log(kk)

// //OR
// let ADD2=(x,y)=>x+y
// let kkk=ADD2(5,90)
// console.log(kkk)

// //..........................>PROPERTY AND METHODS
// //OBJECT LITERALS
// let friend1={
//     name:"NIKHIL",
//     age:23,
//     place:"GERMANY"
// }
// console.log(friend1)

// let friend2={
//     name:"RUHI",
//     age:22,
//     place:"Pune"
// }
// console.log(friend2)

// //RETRIVE
// console.log(friend1.place)
// console.log(friend2['age'])

// //UPDATE
// friend1.place="Amravati"
// friend2['age']= 25
// console.log(friend1)
// console.log(friend2)

// //ADD
// friend1.nikname = "BUNNY"
// friend2.nikname = "RUTU"
// console.log(friend1)
// console.log(friend2)

// //DELETE
// delete friend1.place
// console.log(friend1)
// //AGAIN IF WANT TO ADD DELETED DATA
// friend1.place = "GERMANY"
// console.log(friend1)

// //SETTING object VALUES OUTSIDE THE CLASS  =======>>PROGRAM 1

// let friend3={
//     name:"KANCHAN",
//     age:21,
//     rollno:66
// }
// console.log(friend3)

// class friend{
//     name=undefined
//     age=undefined 
//     rollno=undefined
// }
// let kranti = new friend
// console.log(kranti)

// //update
// kranti.name = "KRANTI"
// kranti.age = 23
// kranti['rollno'] = 11
// console.log(kranti)

//PROGRAM 2 USING CONSTRUCTOR
//userdefined hote hai
//template to create same multiple objects with different 
class Event{
    constructor(name,yr,ht){     //CONSTRUCTOR RETURNS OBJECT 
    this.name = name          //this.anything = parameter name 
    this.year = yr
    this.host = ht
    }
}

let startup = new Event("IMPRESSIONS",2021,"COEP")
console.log(startup)

startup.program = "singing"
console.log(startup)

let karandak = new Event("NATAK",2022,"gandharv")
let drama = new Event("act",2018,"variety")
let zest = new Event("marathon",2020,"singhgad")

console.log(zest)
console.log(karandak)
console.log(drama)

//PROGRAM 3

class person{
    setStyle(sty){
        this.Style = sty        //or this.Styleno = sty
    }
    setRoll(roll){
        this.Roll = roll        //or this.Rollnumber = roll
    }
    setName(nm){
        this.Name = nm
    }
}

     let piyush = new person()
     //console.log(piyush) 

    piyush.setName('DEV')         //jo set kiya hai wahi print krega
    piyush.setStyle(54)
    piyush.setRoll(9)
     console.log(piyush)

//reverse the string
// find the duplicate no frm the array
// find owels frm given string
//prime no
//palindrome no





