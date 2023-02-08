//union type is the special type that means multiple types are expected

function combine(n1:number|string,n2:number|string){
    //here ts complains that + cannot be done as it doesnot understand whats inside the union type.It only knows its a union type.Therefore we need to add type checking for such scenarios
    // const result=n1+n2;

    //this extra runtime check will not aways be required but not always be required depending on the logic
    if(typeof n1 === "number" && typeof n2 ==="number"){
        //here ts knows both n1,n2 are numbers therefore no complains
    return n1+n2
    }
    else{
        //here ts knows bot hn1,n2 will be string
        return n1.toString()+n2.toString()
    }
}

console.log(combine(20,34))
console.log(combine("Anna","joe"))