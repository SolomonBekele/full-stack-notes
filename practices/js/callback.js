setTimeout(()=>{
    console.log('timer');
},200)

function x(af){
    var a = 11;
    console.log("x");
    af()
    console.log(23);
}
function af(){
    let b= 12;
    console.log("y");
}
x(af)
var c= 1;