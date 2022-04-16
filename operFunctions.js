// spread operator using functions 

//=-----------------REST--------------------------

let llll = [11,33,44,55,66,77,88,99,87]
llll = llll.reverse()
function sumOfLastFive(a,b,c,d,e){

    return a + b + c + d + e

}
// let mnmn = sumOfLastFive(llll[0],llll[1],llll[2],llll[3],llll[4])
// console.log(mnmn)

let mnmna= sumOfLastFive(...llll)       //REST
console.log(mnmna)

// //-------------------------------------------------->
//rest operator and spread operator


function addition(a,b,c,d,e){
    console.log(a+b+c+d+e)
}

addition(1,2,3,4,5)


// rest

function addition2(...i){
    console.log(i)
    let sum = i.reduce(function(acc,el){
        return acc + el
    },0)

    return sum
}
let total = addition2(1,2,3,4,5,3,445,666,77,88,99)
console.log(total)


// spread 
let transactions = [11,22,33,44,55,66,77]

function addLastTransac(a,b,c,d,e){
    console.log(a+b+c+d+e) 
}
addLastTransac(...transactions)
//addLastTransac(transactions[0],transactions[1],transactions[2],transactions[3],transactions[4])




