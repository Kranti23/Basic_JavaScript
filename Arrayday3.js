//ARRAY METHODS
//map,reduce,filter, each, some,forEach,fire,find,findIndex

//map ----works with each element of array
 // returns - array(new)
 
//----------------PROGRAM 1

 Ages = [2000,1998,1993,1999]
                          //CALL BACK FUNCT ----ALWAYS WORKS WID ARRAY
let currentages = Ages.map(function(el,index,arr){        //MAP METHOD
    return 2022 - el
})
console.log(currentages)


// ------------to find current age of a person   PURANI METHOD         
let ages = [2000,1999,1993,1998]     
let calAge=[]  // 22 23 29 24
for(let i=0;i < ages.length; i++){
    //console.log(i)
    let currentAge = 2022 - ages[i]      //current year - ages[i]        
    calAge.push(currentAge)        
}
console.log(calAge)


//PROGRAM 2--------------to filter given array ex to find marks above 100
let MARKS = [45,67,89,55,12,138]
let above50 = MARKS.filter(function(el,index,arr){        //USING FILTER
    return el > 50
})
console.log(above50)

// COMMON METHOD
let marks = [33,66,222,169,575,78,53]
let above100=[]
for(let i=0 ; i< marks.length ; i++){
    // console.log(marks[i])
    if(marks[i] > 100 ){
        above100.push(marks[i])
    }
}
  console.log(above100)


//PROGRAM3 --------total sum of elemts of array 
//REDUCE - RETURNS SINGLE VALUE
let nb = [3,5,2]
let rrrr = nb.reduce(function(acc,el,index,arr){
     return acc + el
    } , 0 ) //sets value of accumulator to zero initially
console.log(rrrr)

 // WE CAN SET THE ACC VALUE TO ANY NUMBER
 //           let rrrr = nb.reduce(function(acc,el,index,arr){
  //             return acc + el
//                        } , 5 )     setting value of acc to 5 initially

//PURANI METHIOD
let array = [5,9,8,2]
let total = 0
for(let i =0 ; i < array.length ; i++){
   total = array[i] + total
   // 5 + 0 = 5 ,  5+ 9 = 14 , 14 + 8 = 22 , 22 + 2 =24
}
console.log(total)


//PROGRAM 4--------------->>>
//forEach()----returns nothing, no returns

friends = ["NIKHIL","KUNAL","SHWETA"]
let op = friends.forEach(function(el,index,arr){   //not using return here getting undefined  
    //return 'Heyyy' + el
    console.log('Heyyy ' + el)
})
//console.log(op)


let names = ["ARNAB","KRANTI","PRASAD"]
for(i=0 ; i < names.length ; i++)
{
    console.log("Hieee " + names[i])
}
console.log(names)


