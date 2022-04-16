//FUNCTIONS

function calculator(a,b)                //function defining    (a,b).....paramaters
{
  console.log(a+b)
  console.log(a-b)
  console.log(a/b)
  console.log(a%b)
  console.log(a*b)
}
calculator(100,25)                       //function calling
//(values)===============================(3,4)--->>arguments passing
calculator(24,5)

//FUNCTION WITHOUT PARAMETER AND WITHOUT RETURN TYPE
function ADD()
{
  //s=6+6
  //console.log(s)
  console.log(6+6)
}
ADD()
ADD()
ADD()
ADD()

//FUNCTION WITH PARAMETER AND WITHOUT RETURN TYPE 

function ADD2(a,b)
{
  s=a+b
  //console.log(s)
  //console.log(a+b)
}
ADD2(3,5) 
console.log(s)
ADD2(34,78)
console.log(s)


//FUNCTION WITH PARAMETERS AND RETURN TYPE
function DISPLAY(a,b)
{
  return a+b;             //we can store n return the values using return
  
}
let j = DISPLAY(4,11)
console.log(j)
console.log(j+j)
console.log(j*5)
console.log(j+20)
console.log(j*.10)


let xa = 10
console.log(xa)
console.log('x')
console.log('The value of x is: ' + xa)