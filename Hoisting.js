// invisible decalare javascriptin hoisting var a=10
//var a=10

function codeHoist (){
    a=10;
    let b=50;
}
codeHoist()
console.log(a);//10
console.log(b);//reference error