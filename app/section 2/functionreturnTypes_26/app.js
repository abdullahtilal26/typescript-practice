//here ts will infere the return type
function add(n1, n2) {
    return n1 + n2;
}
//here explicitly add the return type
function add2(n1, n2) {
    return n1 + n2;
}
//ts will infere the return type of this function as void
//function printNumber(num:number):void{}
function printNumber(num) {
    console.log(num);
}
//this will print undefine as your function doesnot return anything.
console.log(printNumber(add(3, 1)));
//if you set the return type as undefined,thank you have to put return statment and dont return anything example
function printNumbers(num) {
    console.log(num);
    return;
}
console.log(printNumbers(5));
//better to use void instead of undefined
