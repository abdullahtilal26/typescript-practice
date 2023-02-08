//union type is the special type that means multiple types are expected
function combine(n1, n2) {
    //here ts complains that + cannot be done as it doesnot understand whats inside the union type.It only knows its a union type.Therefore we need to add type checking for such scenarios
    // const result=n1+n2;
    if (typeof n1 === "number" && typeof n2 === "number") {
        return n1 + n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
console.log(combine(20, 34));
console.log(combine("Anna", "joe"));
