//working with union type could be cumbersome so we can make our ouwn types where we store those union types

type Combinable=number | string;
type ConversionDescription= "as-number"|"as-string"

function combine(n1:Combinable,n2:Combinable,resultConversion:ConversionDescription){
  
    if(typeof n1 === "number" && typeof n2 ==="number" || resultConversion === "as-number"){
       //+n1 means converting n1 to number
    return +n1 + +n2;
    }
    else{
        //here ts knows bot hn1,n2 will be string
        return n1.toString()+n2.toString()
    }
}

console.log(combine(20,34,"as-number"))
console.log(combine("20","34","as-number"))
console.log(combine("Anna","joe","as-string"))

//custome type or type aliases save us some extra code 

// Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 };

console.log(u1)

//This allows you to avoid unnecessary repetition and manage types centrally.
//example from this ---->
function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}

//to this ----->

type User2 = { name: string; age: number };
 
function greeting(user: User2) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlderEnough(user: User2, checkAge: number) {
  return checkAge > user.age;
}