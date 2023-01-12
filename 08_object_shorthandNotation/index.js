const propertyName = "name"
const firstName = "sushil"
const index = 1
const age = 23
const sayHi = function () {
  console.log("hi")
}
const person = {
  firstName, //it is same as the firstName:firstname,
  age,
  sayHi,
}
console.log(person)

//javascript has a short hand object notation
// if the key and variable has the same name we can only write the key and js will automatically understand

//another cool feature that the js provide about js is
// while writting the function inside the object we can ignore the key for that function insted make the key as function name.
const person1 = {
  firstName, //it is same as the firstName:firstname,
  age,
  //   sayHi: function () {
  // console.log("hi hi")
  //   }, // insted of writting this we can write==>
  sayHi() {
    console.log("hi hi hi")
  },
}
console.log(person1.sayHi)

//another feature that js provide is to change the keyname
// the older way to do that is
person[propertyName] = firstName //change the key of the firstname
//we can do rhe same thing by
const person2 = {
  [propertyName]: firstName,
  [`age${index}`]: age,
  sayHi,
}
console.log(person2)
