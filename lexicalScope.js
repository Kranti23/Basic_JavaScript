
//------LEXICAL SCOPE-------------

function div(a, b) {
    let p = 40;
    let q = 20;
    console.log(p / q)
    //console.log()

    function add() {
        let r = 10;
        let s = 300;
        console.log(r + s)
        let op = r + s + p / q;             //Parent variables are accessible inside the child
        console.log(op)

        function Sub(x, y) {
            let s = x - y;
            console.log(s)
            let kk = s + r + s + p / q;
            console.log(kk)
        }
        Sub(55, 35)
    }
    add()
}
div(10, 20)




// function mul(a,b){

//     console.log(a*b)
// }
// mul(3,4)



