function outer(){
    var b=10;
    function inner(){
        var a=20;
        consolog(a+b);
    }
    return inner;
}
let call=outer();
console.log(call)