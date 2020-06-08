//concat()--joining /merging two or more array elements
let arr1=["umesh","ramesh"];
let arr2=[10,10.6,null,true];
console.log(arr1.concat(arr2));
console.log("*********************************");

let arr3=["A","B","C"];
console.log(arr1.concat(arr2,arr3));
console.log(arr3);
console.log("*********************************");

//slice()-display the value from specified index position
let fruits=["banana","apple","mango","orange","gauva"];
console.log(fruits.slice(1));//['apple','mango','orange','gauva']
console.log(fruits.slice(3));//['orange','gauva']
console.log("*********************************");

//sort()
fruits=["banana","apple","mango","orange","gauva"];
console.log(fruits.sort());
console.log("*********************************");

let nums=[900,400,500,100,300];
console.log(nums.sort());
console.log("*********************************");

//reverse()
fruits=["banana","apple","mango","orange","gauva"];
console.log("Original array elements:"+fruits);
console.log(fruits.reverse());
console.log("*********************************");


