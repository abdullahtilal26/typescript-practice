"use strict";
//------------------Lecture 49 let and const------------------
// Var only has global and functional scope and doesnot have block scope i.e {}
// let and const have block scope i.e {} as they will only be available inside the block
//------------------Lecture 50 arrow functions------------------
const printOutput = output => console.log(output);
printOutput(5);
//------------------Lecture 51 Default parameters------------------
const add = (n1, n2 = 5) => {
    console.log(n1 + n2);
};
add(10);
//default params should always come at the end as js computes arguments passed to teh function in order
//------------------Lecture 52 spread operator------------------
const hobbies = ["fifa", "tekken"];
const activeHobbies = ["reading"];
activeHobbies.push(...hobbies);
const person = {
    name: "john",
    age: 21
};
//Shallow copy of object as shallowCopyOfPerson will hold the pointer pointing to the memory of person object
const shallowCopyOfPerson = person;
//Deep copy of object as we created the new object and copy values from person to this new object
const deepCopyOfPerson = Object.assign({}, person);
//-------------------Lecture 53 rest parameter-------------------
const additions = (...numbers) => {
    return numbers.reduce((curr, val) => {
        return curr + val;
    }, 0);
};
//can also use tuples
const additions2 = (...numbers) => {
    return numbers.reduce((curr, val) => {
        return curr + val;
    }, 0);
};
additions(1, 2, 3, 4, 5);
// Example of error
// additions2(1,2,3,4,5)
//------------------Lecture 54 Array and Object destructuring------------------
//array destructuring
//remaining elements will hold the elements from index 2 till end
const data = ["a", "b", "c", "d"];
const [e1, e2, ...remainElements] = data;
//object destructuing
const company = { employees: 51, location: "london", income: 20 };
const { employees: numberOfEmployees, income } = company;
// employees:numberOfEmployees over rides/alias the employees name to numberofemployees
console.log(numberOfEmployees, income);
//------------------Lecture 55 How code gets compiled------------------
//can switch to different version of js through tsconfig
