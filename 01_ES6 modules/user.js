const me = {
  name: "sushil",
  age: 20,
}

export /*this is a way to use named modules */ const sally = {
  name: "sally",
  age: 22,
}
export const pet = {
  name: "dog",
  color: "white",
}
export function printUser(user) {
  //exception , the default export  of function  can de done by writing
  //   "export default" in front of that function.
  console.log(`name is ${user.name} and age is ${user.age}`)
}
export default me // this is a default module
