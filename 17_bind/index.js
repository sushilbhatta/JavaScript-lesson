window.name="Global Name"
const person={
    name:'kyle',

}
function printName(){
    console.log(this.name);
}

printName()
//bind function is used to change the functionality of this keyword.
//In above eg, this keyword point to global scope that is why when we call 'this' it refers to global window.this which prints "Global Name"
//but using bind we can rfer this to the object person.
const newPrintName=printName.bind(person)
newPrintName()
//bind takes another argument too.
//the first argument is what we want to bind 'this' to.In avove example it is binded to person obj.
//second argument take the functions parameter and we can set tose parameter fix.
//lets take anothe example
function sum(a,b){ //passed two argument
    return a+b
}
// function sumTwo(b){
//     return 5+b
// }  line 23 ,24,25 is equivalent to line 26.we have pre defined the first variable of sum() function to always 5 and while passing the value to function we have passed only the value of b.
const sumTwo=sum.bind(null,5) //a is always 5
const sumTwoAndThree=sum.bind(null,2,4)
console.log(sumTwoAndThree())
console.log(sumTwo(3)) //op is 8 
console.log(sum(2,3))

//usecase of bind
function product(a,b) {
    return a*b
    
}
const numbers=[1,2,3,4,5]
// const doubleArrayNumber=numbers.map(number=>{
//     return product(2,number)
// })
// console.log(doubleArrayNumber)
            //OR
const doubleArrayNumber=numbers.map(product.bind(null,2))
 
console.log(doubleArrayNumber)