//filter

const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13]
const a=numbers.filter((numbers)=>{return numbers>7;})
console.log(a)


//filter object array

var creatures=[
    { name: "shark" ,habitat:"ocean"},
    { name: "whale", habitat:"ocean"},
    { name: "lion" ,habitat:"savannah"},
    { name: "elephant" ,habitat:"savannah"}
];

app=creatures.filter((creatures)=>{ return creatures.habitat=="ocean";})
console.log(app);
 const cod =creatures.filter((creatures)=>{ return creatures.habitat=="savannah";})
console.log(cod);