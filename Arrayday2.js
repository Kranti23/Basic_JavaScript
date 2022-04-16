let friends = ["Nikhil","akash","rutuja","abhay"]
       //        0        1       2       3
console.log[0]         //1st index  or 1st element
console.log[2]         //3rd index 

//update 
friends[0] = "Kranti"
console.log(friends) 
//loop                
for(let i=0;i<4;i++){  //1 2 3 4      //if condition is true then it comes inside the blocks
    //console.log(i)
    console.log(friends[i])  //1st i=0, 2nd =1,3rd=2 4th=3

}
console.log('Reversed array.........')

//--------------->
//friends = ["Nikhil","akash","rutuja","abhay"]
for(let i=3;i>-1;i--){ // 2 1 0 -1
    //console.log(i) //3 2 1 0
    console.log(friends[i])
}
console.log(friends)

//method-action & return
let fruits = ["mango","oranges","papaya"]
let rrr=fruits.length
console.log(rrr)

//METHOD
//gym---weight lift action
//return-----muscles

///----------------------------------
//method INDEX OF 
//action--find the index of given element 
//return-number

fruits = ["mango","grapes","banana"]
let pp = fruits.indexOf('grapes')
console.log(pp)
let ppp = fruits.indexOf('apple')
console.log(ppp)
//NOTE:IF ELEM FOUND RETURNS 1 ELSE IF NOT FOUND RETURNS -1

//method includes
//action - search for elements
//returns - if elem found true else false
let gg = fruits.includes('mango')
console.log(gg)

//method - REVERSE
//action - reverse the original array
//return - returns same
let kkk = fruits.reverse()
console.log(kkk)
console.log(fruits)

//method = SORT
//action - for string with aplpha sort in ascending order of alphabets
//return - sorted array
fruits = ["mango","apple","banana"]
let kr = fruits.sort()
console.log(kr)
console.log(fruits)

//method = FLAT
//action - removes the deep array and returns single array
//return - array
              //    0        1           2
let numbers = [[22,44,11],[77,88,33],[222,110,22]]
                //0 1 2    0 1 2         0 1 2
//[22,44,11,77,88,33,222,110,22]
console.log(numbers[0][0])
console.log(numbers[1][2])
console.log(numbers[0][3])

let bbb = numbers.flat()
console.log(bbb)
console.log(numbers)

//method = SLICE
//action - breaks the array
//returns - ARRAY -SUB ARRAY
       //   0  1  2  3  4
let avg  = [11,22,33,44,55]
       //  -5 -4  -3  -2 -1
// avg.slice(start,end)
let pq = avg.slice(1,4)
console.log(pq)

let m = avg.slice(1)
console.log(m)

let k = avg.slice(0,3)
console.log(k)

let lk = avg.slice(-3)
console.log(lk)

let krr = avg.slice(-4,-1)
console.log(krr)

let kt = avg.slice(-1,-4)
console.log(kt)
let q = avg.slice(-4,4)
console.log(q)


//------------HALT------------

//push(),unshift(),pop('a'),shift('b')
