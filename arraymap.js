const products=['beans','gova','orange','mango']
console.log(products.map((el)=>{return el+"@";}))


const price=[2,5,7,16,50,38];
const discountprice=1;
const discountprices=(price.map((price)=>{return price - discountprice;}))
console.log(discountprices)


const num=[3,4,5,6,7,8,9];
const discount=2;
const a=num.map((num) => { return num-discount;})
console.log(a)
