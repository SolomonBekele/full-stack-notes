function a(){
    var x = 10;
    
    b()
    function b(){
        console.log("this is b");
    }
}

function c(){
    console.log("this is c");
    d()
    function d(){
        console.log("this is d");
    }
}

a()