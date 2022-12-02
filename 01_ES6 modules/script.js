import sushil, { sally, pet as dog, printUser } from "./user.js"
// in ES6 modules the name of the default export can be changed by user as desired but
//the name of the named export cannot be changed , it must be matched as it was in exort file
// but use of "as" helps us to do that
console.log(sushil)
console.log(sally)
console.log(dog)
printUser(sally)
