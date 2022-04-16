let friends = ["nikhil", "gunjan", "shital"]
let kk = friends[3]
let rr = friends[0]

console.log(rr)
console.log(kk)
console.log('-------')

let [p, q, r, s] = friends
console.log(p)
console.log(r)
console.log(s)


let family = {

    surname: "chavan",
    relation: "siblings",
    mother: "Ranjana",
    father: "eknath",

}

let { surname: sn, relation: rl, father, mother: mt } = family
console.log(sn)
console.log(mt)
console.log(father)
console.log(rl)
console.log('-------------------------------')
// for(let {surname:sn,relation:rl,father,mother:mt} in family){

//  console.log(sn,rl,father,mt)
// }

let employee = [{
    eName: "Shreyas",
    eId: "657689787",
    salary: 75000,
    skills: ["java", "C", "python"]
},
{
    eName: "Prince",
    eId: "6577",
    salary: 145000,
    skills: ["javascript", "C++", "ruby"]

}]

let [{ eName: el, eId: ei, skills: [x, y, z] }, { skills: [a, b, c], salary: sl, eName: kkk }] = employee
console.log(el)
console.log(ei)
console.log(x)
console.log(y)
console.log(kkk)
console.log(sl)
console.log(c)
console.log(b)
console.log("----------------------------------")


let abc = {

    family:{

        parent:{

            father: "Eknath",
            mother: "Mangal"
        }
    }

}

let {family:{parent:{father:ft,mother:m}}} = abc
console.log(ft)
console.log(family)


//OPERATORS using functions
//SPREAD--->>
// REST---->>>


// function addition(a,b,c,d,e,f,g,h,i,j,k,l){             

//     console.log(a+b.....)


// }

// addition(11,22,33,44,55,66,77,88,99,100,44,55,66,4)


function addition5(...t) {       // SPREAD       //t returns array
    //console.log(t)
    let sum = t.reduce(function (acc, el) {
        return acc + el
    }, 0)
    return sum
}

let total = addition5(1, 2, 3, 4, 5, 67, 56, 888, 23, 12)
console.log(total)






