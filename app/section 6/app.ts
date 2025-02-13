// -----------------Lecture 83 Intersection type--------------------
type Admin={
    name:string;
    privillages:string[]
}

type Employe={
    name:string;
    startDate:Date
}

type manager=Admin&Employe

let e1:manager={
    name:"ahmed",
    privillages:["access emp record"],
    startDate:new Date()
}

//intersection could be used with any types
type combinable=string|number;
type numeric=number|boolean;
type universal=combinable&numeric
let num1:universal=1;
// let num2:universal=true error
// let num3:universal="2"; error
// universal type can have values that are both of type combinable and numeric. 
//For example, if we define a variable of type universal, it can have a value that is either a string or a number, and also either a number or a boolean.
// However, it is important to note that there are no values that can be both a string and a boolean, so such a value cannot be assigned to a variable of type universal.

//intersection types are closely related to interface and inheritance
interface IAdmin{
    name:string;
    privillages:string[]
}

interface IEmploye{
    name:string;
    startDate:Date
}
//interface using interfaces
interface IManager extends Admin,Employe{

}
//type using interfaces
type IManagerType=IAdmin&Employe

// -----------------Lecture 84,85 Type gaurds and discriminated Unions--------------------
//typegaurds help us with union type
//at run time we need to know what type is coming from union type

function add(n1:combinable,n2:numeric){
    //following is called type gaurd
    if(typeof n1==="string" || typeof n2==="boolean"){
        return n1.toString()+n2.toString()
    }

    return n1+n2
}

type UnknownEmployee=Admin&Employe

function printEmployeeInfo(emp:UnknownEmployee){
    console.log("Name",emp.name)
    console.log("Privillages",emp.privillages)
}
// ------------------------not completed because there are some conflicts with the working/logic bw the running ts and video explantion ts------------------