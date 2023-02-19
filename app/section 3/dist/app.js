"use strict";
console.log("hello world", new Date());
let fName;
fName = "none";
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    console.log("Clicked");
});
const map = new Map();
const submitBtn = document.getElementById("submtBtn");
submitBtn.addEventListener("click", (e) => {
    console.log(e);
});
const submitBtn2 = document.getElementById("submtBtn");
function clickHandler(msg) {
    console.log(msg);
}
submitBtn2.addEventListener("click", clickHandler.bind(null, "Hello"));
//# sourceMappingURL=app.js.map