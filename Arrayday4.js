//methods------>> every ,some,splice,findindex,find,jion,concat,fill,flatmap()

//EVERY-returns true if n only if condition is true for all the elem of array else false
let array = [23,18,20,25]
let aaa = array.every(function(el,index,arr){
    return el > 10
    //return el > 20    //condition
})
console.log(aaa)

//SOME- returns true if condition is true for any elem of array else false
let numbers = [34,57,22,56,66]
let ab = numbers.some(function(el,index,arr){
    //return el > 70
    return el > 60
})
console.log(ab)

let abc = numbers.filter(function(el,index,arr){        //returnd array
    return el > 50
})
console.log(abc)

//find- return single value frok arrayn which appears first for the condition 
let aab = numbers.find(function(el,index,arr){
    //return el > 50
    return el > 22
})
console.log(aab)

//findIndex - returns the index of the elem which appers first for the condition  
let kkk = numbers.findIndex(function(el,index,arr){
return el > 50       //return el > 22 
})
console.log(kkk)

//SPLICE - (Position,noofDel,replaceone,reptwo)
 ///   changes actual array returns array
       //          0       1         2      3
let friends = ["kunal","abhinav","akash","radha"]
//friends.splice(1,2)   --returns new array  position 1 removed & nxt 1 elem of array dleted ie 2 elem deleted 
//friends.splice(0,1)           //posi 0 removed n one elem deleted  
//friends.splice(2,2)         position 2 removed nxt 1 elem del ie 2 elem from aray deleted 
//console.log(friends)

 let result  = friends.splice(1,2,"kranti","gunjan")
console.log(result)
console.log(friends)

let abbb = friends.slice(1,3)
console.log(abbb)
 
//JOIN--joins the elements of array by any parameter 
let events = ["coep" , "mindspark" , 77554358]
 let cv = events.join("_")
console.log(cv)

//CONCAT - concatenation of two arrays
let  array1 = ['abc','xyz','pqr']
let array2 = ['d','e']
// let array3 = ['ab','cd']
let result = array1.concat(array2)
console.log(result)
//  let newcon =  res.concat(array3)
//  console.log(newcon)

 //FILL - returns array by filling any parameters at given indexex
let random = [99,76,78,100,75,34]
//let filll =
  random.fill('a',2,5)
 console.log(random)

random.fill('abc',3,6)
console.log(random)








