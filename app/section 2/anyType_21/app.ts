//any type is the most flexible type.It tells ts nothing and you can assign any type of value.
//big disadvantage and need to aboid it
//any make sure ts compile dont check types
//maybe use for runtime checking or you dont know the types of data

let myArray:any[];
myArray=["new",2]

//error if we assign any other type accept array as we define above that array could hold any data type but 'myArray' will only be of type array
// myArray=2
