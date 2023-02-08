//working with union type could be cumbersome so we can make our ouwn types where we store those union types
function combine(n1, n2, resultConversion) {
    if (typeof n1 === "number" && typeof n2 === "number" || resultConversion === "as-number") {
        //+n1 means converting n1 to number
        return +n1 + +n2;
    }
    else {
        //here ts knows bot hn1,n2 will be string
        return n1.toString() + n2.toString();
    }
}
console.log(combine(20, 34, "as-number"));
console.log(combine("20", "34", "as-number"));
console.log(combine("Anna", "joe", "as-string"));
var u1 = { name: 'Max', age: 30 };
console.log(u1);
//This allows you to avoid unnecessary repetition and manage types centrally.
//example from this ---->
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
function greeting(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlderEnough(user, checkAge) {
    return checkAge > user.age;
}
