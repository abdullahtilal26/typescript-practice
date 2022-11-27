// function add(n1, n2) {
//   return n1 + n2;
// }
//this will concat as string.Javascript got string first and then convert the later to string aswell
// const num1 = "5";
// const num2 = 1.5;
function add(n1, n2) {
  return n1 + n2;
}
//we will get error now as n1 is of type number but we are passing string
// const num1 = "5";
// const num2 = 1.5;
var num1 = 5;
var num2 = 1.5;
var result = add(num1, num2);
console.log(result);
