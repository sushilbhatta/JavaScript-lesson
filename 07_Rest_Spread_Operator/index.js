// const array = ["A", "B", "C", "C", "D"]
// const person = {
//   name: "Kyle",
//   age: 24,
//   favoriteFood: "rice",
//   address: {
//     street: "123 main st",
//     city: "somewhere",
//     zipcode: "443243",
//   },
// }
// // function sum(a, b) {
// //   return a + b
// // }
// // console.log(sum(2, 3))
// // in avove example lets pass the array
// function sum(multip, ...numbers) {
//   //triple dot infront of the number is the rest operator,any thing before it is normal parameter
//   // the rest operator puts everything in an array named under three dot variable
//   // in avove example the numbers are kept in an array numbers
//   return multip * numbers.reduce((sum, number) => sum + number)
// }
// console.log(sum(10, 2, 4))
// //the coutput will be 10 but of we do not provide the array as the parameter then it gives an error
// // so we can use spread operator

const number = [, 2, 3, 4]
console.log(number.length)
