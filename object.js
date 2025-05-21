let person={firstname:"john",lastname:"kumar",age:21,isStudent:true};

person.firstname="deep"
delete person.age
console.log(person)
// another method object creating

// let person2=new Object();
// person2.firstname="john";
// person2.lastname="kumar";
// person2.age=21;
// person2.isStudent=true;

// property access

console.log(person.firstname)
console.log(person['lastname'])
console.log("lastname" in person)