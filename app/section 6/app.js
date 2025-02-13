"use strict";
let e1 = {
    name: "ahmed",
    privillages: ["access emp record"],
    startDate: new Date()
};
let num1 = 1;
// -----------------Lecture 84,85 Type gaurds and discriminated Unions--------------------
//typegaurds help us with union type
//at run time we need to know what type is coming from union type
function add(n1, n2) {
    //following is called type gaurd
    if (typeof n1 === "string" || typeof n2 === "boolean") {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
function printEmployeeInfo(emp) {
    console.log("Name", emp.name);
    console.log("Privillages", emp.privillages);
}
// ------------------------not completed because there are some conflicts with the working/logic bw the running ts and video explantion ts------------------
