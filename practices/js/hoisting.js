

console.log(getName());
console.log(x);
var x= 10;

function getName (){
    console.log("hey")
    return 'sss'
}

console.log(getName())
// -----------------------
function parent() {
    var hoisted2 = "I am a variable";
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

console.log(this.x);