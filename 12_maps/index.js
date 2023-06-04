// const CURRENCY_MAP = {
//   "united states": "USD",
//   India: "Rupee",
// }
// const currency1 = CURRENCY_MAP["India"]
// console.log(currency1 )
// const CURRENCIES = [
//   { name: "USD", country: "United states" },
//   { name: "rupee", country: "India" },
// ]
// const currency = CURRENCIES.find((c) => c.country === "India").name
// console.log(currency)

//              the first map example
// const map = new Map([
//   ["united States", " USD"],
//   ["India", "rupee"],
// ])
// console.log(map )

// the +points of map over the object are::
// 1. the key of the maps can be anything  like boolean ,obj,number,array ,string while on the other hand the key of the obj is  always the string .
// 2.in obj there is no order of execution but in map the first element you write will be  the on index 0 and so on.(like array)
// 3.Object are hard to iterate.
// 4.we can get the map size but we cant get the array size
// const user = {
//   name: "sushil",
// }
// // const map = new Map([[user, { age: 23 }]])
// // console.log(map.get(user))

// const map = new Map([
//   [1, "A"],
//   [2, "B"],
//   [3, "C"],
//   [4, "D"],
// ])
// map.forEach((value, key) => {
//   console.log(value, key)
// })
// console.log(map.size) //gives the size of the map==>starts from one
// console.log(map.get(1)) //get the value for that key from the map
// console.log(map.set(5, "E")) //set the new kwy and value in map
// console.log(map.get(5))
// console.log(map.has(2)) //check if the given key is present in map or not
// map.delete(1) //delete the value from the map
// console.log(map)

// practice question
// implement the functionality of the  given object based code into map based code
// const items = [
//   {
//     id: 1,
//     name: "test",
//     description: "Desc",
//   },
//   {
//     id: 2,
//     name: "test 2",
//     description: "Desc 2",
//   },
//   {
//     id: 3,
//     name: "test 3",
//     description: "Desc 3",
//   },
// ]

// function getItem(id) {
//   return items.find((item) => item.id === id)
// }
// console.log(getItem(2))
const map = new Map([
  [
    1,
    {
      id: 1,
      name: "test",
      description: "Desc",
    },
  ],
  [
    2,
    {
      id: 2,
      name: "test 2",
      description: "Desc 2",
    },
  ],
  [
    3,
    {
      id: 3,
      name: "test 3",
      description: "Desc 3",
    },
  ],
])
console.log(map)
function getId(key) {
  const x = map.get(key)
  return x.name
}
console.log(getId(2))
