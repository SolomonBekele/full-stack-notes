function attahEventListener(){
    let count =0;
    document.getElementById("clickMe")
    .addEventListener('click',()=>{
        console.log("button clicked",++count);
    })
}
// attahEventListener()
global.setTimeout(()=>{console.log("object")},2000)