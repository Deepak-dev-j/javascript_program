// //try catch statement in javascript
// function add(a,b){
// return a*b
// }
// try{
// let result=add(10,20)
// console.log(result)
// }

// catch(e){
//   console.log({name:e.name, message:e.message})
// }
// console.log("bye")



// finally
let result=0;
try{
 result=add(10,20)
console.log(result)
}

catch(e){
  console.log({name:e.name, message:e.message})
}
finally{
console.log(result)
}
console.log("bye")

