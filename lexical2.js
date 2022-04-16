
// function add(x, y) {
//      x + y;
//     "add"
//     console.log(x + y);
//     //console.log("add");
//     return function add1() {
//         x + y;
//         "add1"
//         console.log(x + y);
//         //console.log("add1");
//         return function mult() {
//             x * y;
//             "add2"
//             console.log(x * y);
//             //console.log("add2");
//             return function sub() {
//                 x - y;
//                 "sub"
//                 console.log(x - y);
//                 //console.log("sub");
//             }
//         }
//     }
// }
//  console.log(add)
// add(1, 1)
// //console.log(add(1,1))
// add(1,1)()
// // console.log(add(1,1)())
//  add(1,1)()()
//  console.log(add(1, 1)()())

//  add(1,1)()()()


//==========================================================================
// function add(x, y) {
//     return function (){
//         console.log(x+y)

//         return function(a,b){
//             console.log(a+b)
//             console.log(x+y)

//         }
//     }


// }
// let aa = add(4,5)
// aa()(1,3)

//================================================

function ADD(p, q) {

    return ADD1 = () => {
        console.log(p + q);

        return function DIV() {
            console.log(p / q);

            return MUL = () => {
                console.log(p * q)
            }
        }
    }
}
ADD(4, 2)()()()

//--------------------------------------------------

function num1(a,b){
    return function add2(){
        console.log(a+b)
        return function mul2(){
            console.log(a*b)
            return function div2(){
                console.log(a/b)
            }
        }

    }
}
console.log("-----Add()-------")
let aa = num1(12,34)
let numAdd = aa()

console.log("----mul()----------")
let numAddMul = numAdd()

console.log("--------div()------")
let numAddMulDiv = numAddMul()









