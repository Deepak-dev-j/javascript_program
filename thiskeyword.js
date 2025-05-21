//this keyword

// var person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(person.fullName)

function createCharacter(name){
    return {
        name,
        greet:function (){
            console.log(`Hi,${this.name},says hello!`);
        },
    }
}
 a=createCharacter('john');
 console.log(a)
 