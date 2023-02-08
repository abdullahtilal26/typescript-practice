//Enums are basically to represent specific identifiers,global constants etc for human readibilty

const ADMIN=0;
const USER=1;

const person={
  name:"atk",
  age:23,
  hobbies:["tennis","cricket"],
  role:ADMIN
}

if(person.role===ADMIN){
  console.log("is admin")
}
//In the above example the downsize is our role now only support number and also the number the businesss logic dont support and maintain a huge list of constants

enum Role {SUPER_ADMIN,AUTHOR,EDITOR}
//ENUM assigns number on behind the scenes that means super_admin=0,author=1 and editor=2

//some example of assigning values to enums
enum Role2 {SUPER_ADMIN=5,AUTHOR,EDITOR}
//here superadmin=5,,author=6 and editor=7
enum Role3 {SUPER_ADMIN='Admin',AUTHOR=3,EDITOR="Book Editor"}
//here superadmin=Admin,,author=3 and editor=Book Editor

const person2={
  name:"atk",
  age:23,
  hobbies:["tennis","cricket"],
  role:Role.SUPER_ADMIN
}

if(person2.role===Role.SUPER_ADMIN){
  console.log("is superadmin",Role.SUPER_ADMIN)
}
