

console.log(getName());
console.log(a)
console.log(x);
var x= 10;
var y = null;
console.log(y);
function getName (){
    console.log(a);
    let a =19;
    console.log("hey")
    return 'sss'
}

console.log(getName())
// -----------------------
function parent() {
    var hoisted2 = "I am a variable";
    console.log(parent.hoisted2)
    function hoisted() {
        return "I am a function";
    }
    return hoisted();
}

console.log(parent());

// The concept here is that during declaration, the function is hoisted first, followed by the variable. So, while we might think the variable is overwritten by the function, the case is actually the opposite.

// I hope this helps someone and that they don't miss out on a great opportunity like I did !!!

// Declaration phase - the function gets priority.
// Execution phase - the variable assignment overwrites the function.

// console.log(window.x);
console.log(this.x)
parent()


function b(){
    console.log(a)
}
b();
var a=10;
console.log(a)