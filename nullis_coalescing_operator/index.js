function greet(firstName, lastName, salution) {
  salution = salution || "hi" //this is the boolean OR operation .it always prints the true value
  console.log(`${salution} ${firstName} ${lastName}`)
}
greet("sushil", "bhatta", null) //here null ,undefined,emptystring array obj all are flase so it will print hi
// but we just want to print the 'default value when the  argument is either null or undefined
// for that we have nullish coalescing operator(??)
// The nullish coleacing operator just check for null and undefined
console.log(undefined ?? false)
//here in line 9 the first parameter is checked if it is undefined or null.If it is any one of them then the
// second parameter is returned or else the first parameter is returned.
console.log(true ?? false) //return true
console.log(null ?? false) //return false
const name = (firstName, lastName /*= "bhatta"*/) => {
  // lastName=lastName||'bhatta' The problem with using or operator is that the it will consider null empty string empty array or obj all false so when the argument is provided by the user that is technically false  it will print default value
  // so to check ony for null and undefined value we have ?? operator.
  lastName = lastName ?? "bhatta" //here if the last name is undefined or null it will return the default value else not.
  console.log(`${firstName} ${lastName}`)
}
name("sushil", null)
