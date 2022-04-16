
var nickname = "Kunal Kulkarni"    //whatever is defined in global scope is attached with window
                                     //Window is a global objectlet 
// console.log(this) // window
// alert('a')
// window.alert()

friends = {
    name: "Kunal K",
    nickname: "KK",
    age: 23,

    display: function () {                                 //function expression

        console.log(this.nickname)                 //this ka scope hai object name

        function display2() {                              //function declaration

 //console.log(this)..here..leni chahiye object but giving window isiliye arrow funct ka use krre
            console.log(this.nickname)               //this ka scope hai window
        }
        display2()
    }

}
console.log(friends)
friends.display()
console.log(this)


//---------PROGRAM 2 -----------

var age = 18
//var x = 10
let person ={
    fullname:"Kranti Chavan",
    age:23,
    displayAge:function(){                  //fnct express
        console.log(this.age)              //this ka scope hai object  cuz iska parent hai object

        display2 = () =>{                 //arrow funct
            //----this ki value hogi iske immediate parent ke this ki value 
            console.log(this.age)        //this ka scope hai object      
        }
       display2()
    }

}
person.displayAge()
console.log(this)             //window


//---------PROGRAM3----------------
//Arrow function ko use krte waqt this keyword ka funct chnage ota hai

var type = "Bike"            //window

let vehicle = {

    type: "car",
    brand: "BMW",

    newBrand:() => {                 //yaha parent ka scope window hai
        console.log(this.type)       //this ka scope hai window 

        newBrand2 = () => {
            //here iska immediate parent hai newBrand n uske this ka parent hai window 
            console.log(this.type)           //this ka scope hai window
        }
        newBrand2()

    }
     
}
vehicle.newBrand()





