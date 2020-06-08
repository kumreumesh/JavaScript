let s="welcome";
console.log(s); //welcome

let s1=new String("umesh");
console.log(s1); // [string:'umesh']

//charAt()-return specified char index position
console.log(s.charAt(3));// c

//concat()
console.log(s.concat(" to javascript"));// welcome to javascript 
console.log(s.concat(" to javascript").concat(" programming"));// // welcome to javascript programming

//toUpperCase or toLowerCase
let ss="JaVaScript";
console.log(ss.toLowerCase());//javascript
console.log(ss.toUpperCase());//

// replace()
let s2="welcome to java";
console.log(s2.replace("java","javascript"));// welcome to javascript

//substring()
console.log(s2.substring(0,3));//wel
console.log(s2.substring(11,15));//java

//split()-remove the spaces,comma in between string value 
let arr=s2.split(' ');
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
//trim() removing the starting and ending spaces
let s3="    javascript     ";
console.log(s3.trim());

