//any js array type can be flexible or strict regarding the elements types.
var person = {
    name: "atk",
    age: 23,
    hobbies: ["Football", "Cricket"]
};
//in the above example the hobbies array is of type "string[]" string array
var mySkills = ["java", "node"];
//mySkills is of type string[] and we cannot add any other element of other type except string.
// mySkills=["java","node",360] error as 360 is of type number
//if we want our array to be mix array such that it can hold element of any type,then we neeed to use the keyword "any" but its not a good practice
var mySports = ["cricket", 2];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
