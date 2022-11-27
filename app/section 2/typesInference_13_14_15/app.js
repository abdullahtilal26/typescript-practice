// In TypeScript, you work with types like string or number all the times.
// Important: It is string and number (etc.), NOT String, Number etc.
// The core primitive types in TypeScript are all lowercase!
function add(n1, n2, printResult, phrase) {
    if (printResult) {
        //treating everything as strig agaiin as first variable is of type string
        // console.log(phrase + n1 + n2);
        //correct way
        var result = n1 + n2;
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var num1 = 5;
var num2 = 1.5;
var printResult = true;
var phrase = "Result is: ";
add(num1, num2, printResult, phrase);
//ts type
//number const a=5
//string const a="5"
//boolean const a=true
//ts has a built in feature called type inference.That means ts understood what type you have in variables.
//let a=5 means that ts will consider variable a as number alwayss coz it was initialzed with number.
//Another way to define type of variables is following but its not the good practice as its redundant
var myNumber = 5;
//however if you want to have some uninitialized variables then the good practice is following
var unassignedNumber;
//----some code----
unassignedNumber = 5;
//Another thing to note is if there is any unassigned variable with no type then ts will not infere its type and it will allow 'any' type for the initialization and assignment
var unassignedvariable;
unassignedvariable = 6;
unassignedvariable = "string type";
//that means that TS will infere type when the initialization is done right away with variable declaration or a type is defined explicitly
