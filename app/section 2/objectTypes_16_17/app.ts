const person={
  name:"Atk",
  age:30
}

console.log(person.name)
console.log(person)
// console.log(person.nickname) //error as nickname doesnot exist

//its a concrete object where ts infered data types of keys.
//In ts object type is same as object but has data types instead of values.(key type pair) i.e 
// const person:{
//   name:string;
//   age:number;
// }

//could be more generic by defining object type 'object'
const person2:object={
  name:"Atk",
  age:30
}

// console.log(person2.name) thiswill give error as we defined only the type object and doesnot provide any other info to ts about the keys and its types
//therefore we should be more specific

//However this is not a god practice.Its better to ts let it infer types by itself
//Also type assignments are removed when compile to js.Its just TS represenattion of an object type that help ts uderstand object your are working with
const person3:{
  name:string;
  age:number;
}={
  name:"Atk",
  age:30
}

console.log(person3.name)

//if we define the static value insead of type,ts will not let us change the value of that prperty again
// const person4:{
//   name:string;
//   age:30;
// }={
//   name:"Atk",
//   age:40
// }

// --------------NESTED OBJECTS-------------
const product={
  id:"abc1",
  price:12.99,
  tags:["abc","zyx"],
  details:{
    title:"red",
    description:"test desc",
    qty:5
  }
}

//nested objects have thier own object types.so you can have object type in an object type
//here is the object type of product object above
// const product: {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//       title: string;
//       description: string;
//       qty: number;
//   };
// }