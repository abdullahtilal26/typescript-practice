// function add(n1, n2) {
//   return n1 + n2;
// }

//this will concat as string.Javascript got string first and then convert the later to string aswell
// const num1 = "5";
// const num2 = 1.5;

function add(n1: number, n2: number) {
  return n1 + n2;
}

//we will get error now as n1 is of type number but we are passing string
// const num1 = "5";
// const num2 = 1.5;

const num1 = 5;
const num2 = 1.5;
const result = add(num1, num2);

console.log(result);

//js is dynamically typed that means it could have a string initially but could hold number or etc at any other point of time in code
//we can use typeof operatior to check type of variable in js at runtime
//ts is statically typeed that means we defined the type of var,params during develoment and they dont change during run time.
//js only knows about couple of types
//with ts you only get support during development when you compile your code
