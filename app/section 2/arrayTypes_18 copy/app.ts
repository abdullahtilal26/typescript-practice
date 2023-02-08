//TS ADD NEW TYPE "TUPLE".
//Its a fixed length and fixed type array

const persons={
  name:"Atk",
  age:23,
  hobbies:["Cricket","Football"],
  role:[1,"manager"]
}
//In the above object,ts infere that role will either has a number or string "role:(stringnumber)[]" which is union type
persons.role.push("admin")
persons[1]=2

const persons2:{
  name:string,
  age:number,
  hobbies:string[],
  role:[number,string]
}={
  name:"Atk",
  age:23,
  hobbies:["Cricket","Football"],
  role:[1,"manager"]
}

//In  the above person2 object,defining types explicitly especially for the role means that role will only have 2 elements with the 0 element will be number and the 1 index one will be string.Here we will not have union types but the tuples
persons2.role.push("admin")
//pushing into tuple is an exception where ts allow you to add more elements by pushing 
//However this will be error as ts will not allow more than 2 elements in role array--->persons2.role=[1,"Admin","Abc"]
//error---> persons2.role[1]=2
