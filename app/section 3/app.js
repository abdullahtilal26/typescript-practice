"use strict";
//----------- lecture 34 Using watch mode -----------
//to add a hot reload we will use atch command
//tsc app.ts -w OR tsc app.ts --watch
console.log("hello world", new Date());
let fName;
fName = "none";
//----------- lecture 35 compiling entire project/multiple files-----------
//to initialize  TS project ---> tsc --init
//this will create a tsconfig.json which tells ts that its a project and other sub folders will be managed by ts
//to compile whole ts project ---> tsc
//to add watch mode for project ---> tsc --watch ->It will only recompile the file in which changes we made
//----------- lecture 36 Including/excluding files -----------
//-------Exclude-------
// in tsconfig we can define which files to not compile by the following method
//add the exclude array and add the name of excluded files in it in the tsconfig.Example
//  "exclude": ["test.ts","config/db.dev.ts","**/*.staging.ts","node_modules"]
//we can use wildcard in exclude array
// **/*.staging.ts means that do not compile any file with the extension of .staging.ts in any folder
//node modules are by default excluded from ts compilation.We dont need to add them in exclude manually
//-------Include-------
//we can include files that we need to compile by setting in tsconfig.json
//if we add include section,then only files that are added in include will be compile
//compile files = included files - excluded files
// "include": ["app.ts","config"]
//Files is like a include but works only for files and not folders
// "files":["analytics.ts"]
//----------- lecture 37 Setting a target in compiler setttings -----------
//compiler option in tsconfig allow us how to control our compilation
//we have a target property in compilerOptions which basically means the version of javascript code,ts will compile into
//Example if target is set to es5,then ts code having const,let will be compile to js code having var
//This is a great option so that we can give backward compatability to old browser that dont understand es6
//----------- lecture 38 TS Core libs -----------
// libs allow you to specify which default object and features ts knows
// We added "!" in the next line because it tell ts that dont worry in future such a button will exist and we will get value. other wise ts consider button as null
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    console.log("Clicked");
});
//How does ts let us compile and how ts knows that "document" or "document.getElementById" or "button.addEventListener" constatnt or variable or method exist?
//It works because of "lib" option inTS
//Normally some default is set to lib array and lib option is commented in tsconfig file
//Lib defaults depend on your target in tsconfig
//lets say if target is es6,then lib default includes all es6 features e.g Map
const map = new Map();
//By default all dom apis are also included in lib
//If you uncomment lib in tsconfig,then all lib defaults are removed and you have to set by yourself
//Lib default setings are as follows
// "lib": ["DOM","DOM.Iterable","ES2016","ScriptHost"],
//----------- lecture 39 More configuration and compilation options -----------
// allowjs and checkjs allow js files in compilation
// allowJs->Js file can be compile by TS
//checkJs->Js file is not compiled but its ead by compiler and errors are promted
// jsx is an option that can help with react js
//declaration and declarationMap are usefull when you are shiing your project as a library to people and you need a manisfiest file that describe all the types you have in the project
