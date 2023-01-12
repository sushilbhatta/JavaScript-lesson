const sushil = {
  name: "sushil",
  age: 25,
  //   address: undefined,
  address: {
    street: "123 Main St",
    city: "somewhere",
  },
  sayHi() {
    console.log("Hi")
  },
  hobbies: ["Bowling", "weight lifting"],
}

// function printStreet(person) {
//   //   if (person && person.address && person.address.street) {
//   //     console.log(person.address.street)
//   //   } else {
//   //     console.log("bad Action")
//   //   }
//   // or
//   console.log(person && person.address && person.address.street)//we'll get undefined if params are not defined insted of
//                                                                   "Uncaught type error"
// }
// printStreet(sushil)
/* the optional chaining is one of the important concept in js.
lets look through where we may need it :::
<1> if in avove code if the adress is undefined then our code will break down  and we ll get get a error like
"Uncaught type error:cannot read the proerty of <SOMETHING>".So, to prevent it we must use  conditioning statement.But to use
conditioning statement for deep  object, it will be too much time consumuing and ugly to work and understand as we are cheacking
all the way to see if somthing exist or not (here Street).SO optional chaining  helps to minimize the task that we have done avove.
*/
// implementing the optional chaining

function printStreet(person) {
  console.log(person?.address?.street) //we just have to put the ?.(question mark period symbol) to do all the avove task.
  //                                     ie is we ll get undefined if params are not defined
}
printStreet(sushil)
/*
In avove example we have used optional checking .
the ? symbol checks if the person is either Undefined or null.If it is one of them it stops execution and return the undefined or 
null else it goes on executing the code further.
 */

//optional chaining works for arrays or function too

function callSayHi(person) {
  //   person?.sayHi()
  //here if we do not put ? before the .(period ) symbol we ll get type error not function  because we are only check
  //   ing if person is undefined or not which is clearly defined but sayHi() function do not even exit so we have to check, Does sayHi()
  // exit or not by putting ?. symbol infront of ()
  person?.sayHi?.()
}
callSayHi(sushil)
function printHobbieOne(person) {
  console.log(person?.hobbies?.[0])
}
printHobbieOne(sushil)
