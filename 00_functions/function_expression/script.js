/* A function  can also be created by using a function expression  .
The type of function can be anonymous ie it doesnot have name */

const square=function(number)
{
    return number * number
}
const X=square(4)
console.log(X)

/** However, a name can be provided with a dunc expression.
 * Providing a name allows the function  to refer itself. It also makes it easier to identify the function in Debugger's Tools.
 */
const factorial=function fact(n){
    return n<2 ?1 : n*fact(n-1)
}
console.log(factorial(3))

//  Function expressions are convient when passing a function as an argument to another function.The following example shows a map function 
// that should recive a function as first argument and an array as an second argument.

function map(f,a){
    let result=[]
    for(let i=0; i<a.length; i++){
        result[i]=f(a[i]) //calling function 
    }
    return result
}
const f=function (Y) {
    return Y*Y*Y
}
const num=[1,2,3,4,5,6]
const cube=map(f,num)
console.log(cube)
