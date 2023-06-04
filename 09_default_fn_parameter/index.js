console.log("hi")
function greet(
  firstName,
  lastName,
  salution = "hi" /*setting the defaut param*/
) {
  //salution = salution || "hi" //this is the calssical way of setting parameter to the default value
  console.log(`${salution} ${firstName} ${lastName}`)
}
greet("sushil", "bhatta", "hello")
/*here the situation arises where if we miss any argument in 
in function call that parameter will be replaced by the 'undefined '.
so it is better to give the default value t0 the parameter so that the code will not broke.
 note:::: if we pass the argument undefined it will set a default value but setting  null as parameter will not pass the default value insted pass null.
*/
