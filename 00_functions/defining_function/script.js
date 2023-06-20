// // function expression
// const square = function (number) {
//   //anonomyous function
//   return number * number
// }
// console.log(square(5))
// //providing name allows us to refer to itself.
// const factorial = function fact(n) {
//   if (n < 2) {
//     return 1
//   } else {
//     return n * fact(n - 1) //refering fact(n)
//   }
// }
// console.log(factorial(3))

// function expression are convinent way of passing function as an argument.lets look qt an example.
// function map(f, a) {
//   //orginal fn
//   const result = []
//   for (let y = 0; y < a.length; y++) {
//     result[y] = f(a[y])
//   }
//   return result
// }
// const aurgumentof_f = function (x) {
//   //function argument defination
//   return x * x * x
// }
// const number = [1, 2, 3, 4, 5]
// const cube = map(aurgumentof_f, number) //passing function as argument
// console.log(cube)

// // In  javascript a functio ncan be defined on thee basis of conditionq.
// let myFunc
// const car = {
//   make: "audi",
//   color: "red",
// }
// const num = 10
// if (num === 0) {
//   myFunc = function (obj) {
//     obj.make = "toyta"
//   }
//   myFunc(car)
//   console.log(car.make)
// } else {
//   console.log("NO car avaliable")
// }

