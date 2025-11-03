// shadowing means Providing same name to the variable as of those variable which are present in outer scope.
// let a= 10

// {
//     let a =10
//     console.log(a);
// }





// Illegal shadowing:- Shadowing of let to var and it will throw syntax error.
//  var is function/global-scoped and hoisted; let/const are block-scoped. 
// Redeclaring the same identifier with different scopes (var vs let/const) will cause a parse-time error.

let b= 10;

{
    var b =10;
    console.log(a);
}