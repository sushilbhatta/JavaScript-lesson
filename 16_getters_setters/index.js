// getters and detters

const  person={
    firstName:'sushil',
    lastName:'bhatta',
    fullName(){
        return this.firstName+' '+this.lastName
    }
    
}
console.log(person.fullName())
//Here, we are printing the full name using the function.
// but  if we want to perform the same operation using the 
// property of an object the  in JS we have a 
// getter and sitter

const  person1={
    firstName:'kyle',
    lastName:'cook',
    get fullName(){ // getters do not take a parameter.
        return this.firstName+' '+this.lastName
    },
    set fullname(value){  //setters use a single parameter
        [this.firstName,this.lastName]=value.split(' ')
    }
}   

person1.fullname="sam smith"
console.log(person1.fullName) //fullname is a function but we can interrept it as a property.
console.log(person1)


//example
const users={
    _username:"web dev simplified", //this type of notion is used to define variable to represt the private data.
    get username(){
        return this._username 
    },
    set username(value){
        if(value.length>5){
            this._username=value
        }
    }
}

users.username="sushilll" 
console.log(users.username)//we are calling fn as an property


//exercise
//find the year the person was born given to you the age of the person  
const person2={
    age:25,
    get yearBorn(){
        const date=new Date() 
        console.log(date.getFullYear()-this.age);

    }
}
console.log(person2.yearBorn)
