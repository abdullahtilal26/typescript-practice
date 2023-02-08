//Enums are basically to represent specific identifiers,global constants etc for human readibilty
var ADMIN = 0;
var USER = 1;
var person = {
    name: "atk",
    age: 23,
    hobbies: ["tennis", "cricket"],
    role: ADMIN
};
if (person.role === ADMIN) {
    console.log("is admin");
}
//In the above example the downsize is our role now only support number and also the number the businesss logic dont support and maintain a huge list of constants
var Role;
(function (Role) {
    Role[Role["SUPER_ADMIN"] = 0] = "SUPER_ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["EDITOR"] = 2] = "EDITOR";
})(Role || (Role = {}));
//ENUM assigns number on behind the scenes that means super_admin=0,author=1 and editor=2
//some example of assigning values to enums
var Role2;
(function (Role2) {
    Role2[Role2["SUPER_ADMIN"] = 5] = "SUPER_ADMIN";
    Role2[Role2["AUTHOR"] = 6] = "AUTHOR";
    Role2[Role2["EDITOR"] = 7] = "EDITOR";
})(Role2 || (Role2 = {}));
//here superadmin=5,,author=6 and editor=7
var Role3;
(function (Role3) {
    Role3["SUPER_ADMIN"] = "Admin";
    Role3[Role3["AUTHOR"] = 3] = "AUTHOR";
    Role3["EDITOR"] = "Book Editor";
})(Role3 || (Role3 = {}));
//here superadmin=Admin,,author=3 and editor=Book Editor
var person2 = {
    name: "atk",
    age: 23,
    hobbies: ["tennis", "cricket"],
    role: Role.SUPER_ADMIN
};
if (person2.role === Role.SUPER_ADMIN) {
    console.log("is superadmin", Role.SUPER_ADMIN);
}
