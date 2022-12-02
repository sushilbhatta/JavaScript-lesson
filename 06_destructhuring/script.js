const array = ["A", "B", "C", "D", [1, 2, 3]]
const person = {
  name: "sushil",
  age: 21,
  favouriteFood: "Rice",
  address: {
    street: "123 main st",
    city: "kathamandu",
  },
}
//destructhuring is the way to access the array and object in different ways.
//      ARRAY DESTRUCTURING
// const first = array[0]
// const second = array[1]
// console.log(first, second)

const [first, second, third, forth, [el1, el2, el3], sixth = "hello"] = array

console.log(first)
console.log(second)
console.log(third)
console.log(forth)
console.log(el1)
console.log(el2)
console.log(el3)
console.log(sixth)

// function addAndMultiply(a, b) {
//   return [a + b, a * b]
// }
// const [sum, multiply] = addAndMultiply(5, 2)
// console.log(sum, multiply)

//   OBJECT DESTRUCTURING
const {
  name: namevar,
  age,
  /*address: addressvar*/ address: { street, city, zipcode = "123" },
} = person
// const { street } = addressvar
console.log(namevar)
console.log(age)
// console.log(addressvar)
console.log(street)
console.log(city)
console.log(zipcode)

// function addAndMultiply(a, b) {
//   return { sum: a + b, product: a * b }
// }
// const { sum, product } = addAndMultiply(2, 3)
// console.log(sum)
// console.log(product)

// function nameTOFirstAndLastArray(fullName) {
//   const results = fullName.split(" ")
//   return results
// }
// const [firstName, lastName] = nameTOFirstAndLastArray("Sushil Bhatta")
// console.log(firstName)
// console.log(lastName)

function nameTOFirstAndLastObject(fullname) {
  const [firstname, lastname] = fullname.split(" ")
  return {
    firstname: firstname,
    lastname: lastname,
  }
}
const { firstname, lastname } = nameTOFirstAndLastObject("sushil bhatta")
console.log(firstname)
console.log(lastname)

function addAndMultiply(option) {
  const a = option.a
  const b = option.b
  return [a + b, a * b]
}
const [sum, product] = addAndMultiply({ a: 2, b: 3 })
console.log(sum)
console.log(product)
