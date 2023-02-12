// Unknown type could hold any value.Its like "any" but works in more strict manner
//"any" eliminates all type checking but "unknown" does not
let userInput:unknown
let userInput2:any
let userName:string
userInput="max"

//here we get an error because unknown type is not assignable to variable of any other type
// userName=userInput

//here we got no error because any eliminates all type checking
userName=userInput2

//to avoid the error we need to do some type checking
if(typeof userInput === "string"){
    userName=userInput
}

//never is another type that functions can return
//in the following function the return type infered is void.
//Howeve when we trow the error,the execution of function is terminayed and it retuns nothing,not even undefined
function generateError(message:string,code:number){
    throw {
        message,
        errorCode:code
    }
}
//since this function will be terminated without returning anything due to error,it is better to use "Never" type
//By using "never",our intentions will be more clear and increase code quality
//TS will not infere never type as its a newer type
function generateErrorRefactored(message:string,code:number):never{
    throw {
        message,
        errorCode:code
    }
    // while(1){}//another usecase
}
// generateError("Error occured",500)
console.log(generateErrorRefactored("Error occured",400))