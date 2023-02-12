function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    var functionData = cb(result);
    console.log("function data", functionData);
}
addAndHandle(8, 3, function (res) {
    console.log("printing in anonmus callback function the result", res);
    //here we are returning res in callback function however in the above addAnd Handle function we have defined return type as void
    //however no error are promted and this is done purposely by TS
    //Using void on return types means that the return data is useless.And we can return anything
    //However error will be promted if return type is undefined or any other type except void
    //TS is very strict on paramters and less strict on return types
    return res;
});
