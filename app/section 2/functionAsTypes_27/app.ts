function add(n1:number,n2:number){
    return n1+n2
}
function sub(n1:number,n2:number){
    return n1-n2
}
function concatName(n1:string,n2:string){
    return n1+n2
}
let result;
result=add
console.log(result(5,3))

//here we will get the run time error not the compilation error,since result2 type is any
//first it stored thr function type and then the number type.Ts does not know this at the time of compilation and during runtime,
//app crashes as now result2 cintains number and not a function that will be called
let result2;
result2=add
// error=>>>> result2=6
console.log(result2(5,3))

//here this is a special ts type function that means result3 will only hold functions
//However variables having function type can hold/point to other functions aswell like below
let result3:Function
result3=add
result3=sub
// error below as result3 now only hold funcction types
// result3=6
console.log(result3(6,3))


//in order to make the variable have the function with the exact parameter types and return types
let result4:(a:number,b:number)=>number;
result4=add
console.log("function type",result4(5,8))
//errror below
// since we put validation on result4
// result4=concatName