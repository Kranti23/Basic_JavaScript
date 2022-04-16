//OBJECT DOENT STORE THE VALUE BY INDEX
//ARRAYS STORES VALUE BY INDEX
let person = {

    fullName:"chinmay deshpande",
    age:12,
    skills:["python","css"],  //array
    parents:{          //object
        father:"shirsh",
        mother:"kanchan" // "kanchan D"
    }

}

person.parents.mother = "kanchan D"
console.log(person)
person['parents']['father'] = "Shirish M"
person.skills.push('javscript')             //adding elem to array at end
console.log(person)
