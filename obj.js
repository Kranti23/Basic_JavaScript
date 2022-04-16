
//OBJECTS

let x =20
console.log(x)
console.log(typeof x) 

let y = "KRANTI"
console.log(y)
console.log(typeof y + 'is:')

let z = true
console.log(z)
console.log(typeof z )


// let person =["CHAVAN KRANIT","PUNE",22,11]

let person={
      FULLNAME:"KRANTI CHAVAN",
      AGE:22,
      CITY:"PUNE",
      ROLLNO:11
}

//DOES NOT STORE THE VALUE BY INDEX
//objectName.property               //.notation
//objectName['property']  ...........BRACKET NOTATION

//RETRIVE
console.log(person.FULLNAME)
console.log(person['FULLNAME'])
console.log(person.AGE)

// UPDATE
person.FULLNAME = "RUHI"
person['FULLNMAE'] = "RUHI"
person.AGE = 25
person.ROLLNO = 49
console.log(person)

//DELETE
delete person.AGE
delete person['CITY']
console.log(person)

//DELETE ........PROPERTY-VALUE -- ADDITION
person.lang1 = "hindi"
person.lang2 = "Marathi"
console.log(person)


//EXAMPLE 2
let vehicle ={
    type:"MERCEDES",
    //color:"black",
    regn0:7,
   owner:"nikhil",
    start:["automatic","electric"]

}
//console.log(vehicle.type)
//console.log(vehicle['type'])

//.DOT NOTATION DOES NOT WORK INSIDE THE LOOP

for(let a in vehicle){
    console.log(a,vehicle[a])                  //prints value in a loop
}


//OBJECT =====>METHODS

let student={                 //function expression
    name:"DEV",
    age:28,
    rollno:67,
    display:function(){
        console.log("declaration")
    }
}

student.display()

let k = "amogh"
k.toUpperCase()
console.log(k)

//FUNCTION DECLARATION
function add(a,b){
      return a+b
}
let iii=add(6,60)
console.log(iii)

//FUNCTION EXPRESSION

let add1=function (x,y){
    return x+y
}
let jjj=add1(56,2)
console.log(jjj)
console.log(jjj+jjj)

//ARROW FUNCTION

let add2 = (x,y)=>{
    return x+y
}
let kkk= add2(4,5)
console.log(kkk)
let abc=console.log("hello")
//console.log(abc)