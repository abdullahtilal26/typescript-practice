//any js array type can be flexible or strict regarding the elements types.

const persons={
  name:"atk",
  age:23,
  hobbies:["Football","Cricket"]
}

//in the above example the hobbies array is of type "string[]" string array

let mySkills:string[]=["java","node"]

//mySkills is of type string[] and we cannot add any other element of other type except string.
// mySkills=["java","node",360] error as 360 is of type number

//if we want our array to be mix array such that it can hold element of any type,then we neeed to use the keyword "any" but its not a good practice
let mySports:any[]=["cricket",2]

//here when we acces the hobbies array ts infered that the "hobby" would be of type string and then it suggested methods related to strings.
//This is where TS shines and give us an advantage
for(const hobby of persons.hobbies){
  console.log(hobby.toUpperCase())
}