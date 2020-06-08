let fruits=["apple","banana","orange","mango"];
console.log(fruits);//['apple','banana','orange','mango']
console.log(fruits.toString);//[function:fruits]
console.log(fruits.toString());// apple,banana,orange,mango 
console.log(fruits.join("*"));// apple*banana*orange*mango
console.log(fruits.join("#"));//apple#banana#orange#mango


console.log("***********************************");

//pop()
fruits=["apple","banana","orange","mango"];
console.log(fruits.pop());// mango
console.log(fruits);//['apple','banana','orange']

console.log("***********************************");

//push()
fruits=["apple","banana","orange","mango"];
console.log(fruits.push("gauva")); //5
console.log(fruits);// ['apple','banana','orange','mango','gauva']

console.log("***********************************");
//shift()

fruits=["apple","banana","orange","mango"];
console.log(fruits.shift());//apple
console.log(fruits);//['banana','orange','mango','gauva']

console.log("***********************************");
//unshift()

fruits=["apple","banana","orange","mango"];
console.log(fruits.unshift());//
console.log(fruits);//
console.log("***********************************");
//delete()

fruits=["apple","banana","orange","mango"];
delete fruits[1];
console.log(fruits);


