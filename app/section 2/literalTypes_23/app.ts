//literal type are the type based on ypur core types but you have a specific version of that type
function combine(n1:number|string,n2:number|string,resultConversion: "as-number"|"as-string"){
  
    if(typeof n1 === "number" && typeof n2 ==="number" || resultConversion === "as-number"){
       //+n1 means converting n1 to number
    return +n1 + +n2;
    }
    else{
        //here ts knows bot hn1,n2 will be string
        return n1.toString()+n2.toString()
    }
}

console.log(combine(20,34,"as-number"))
console.log(combine("20","34","as-number"))
console.log(combine("Anna","joe"))

//error as it only accept as-number or as-string
// console.log(combine("20","34","as-numbe"))

//we could also use enum for this but we only have two types of logic and using literal could also work