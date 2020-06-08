let number=1000;
console.log(number);// 1000

let num=new Number(500);
console.log(num);//500

let x=1000;
let y=100.8;
let z=15e2;
console.log(x+ " "+y+" "+z);// 1000 100.8 1500

//isInteger()
x=100;
y=20.7;
z=y;
console.log(Number.isInteger(x));//true
console.log(Number.isInteger(y));//false
console.log(Number.isFinite());//false
console.log(Number.isInteger(z));//false
 
//parseInt()-convert string into number
s="12345";
console.log(Number.parseInt(s));// 12345
console.log(typeof(s));// string
console.log(typeof(Number.parseInt(s)));//number

//toString()
let no=12345;
console.log(typeof(no));//number
console.log(typeof(Number.toString(no)));// string 

