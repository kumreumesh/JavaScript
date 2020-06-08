let cars=["nissan","audi","bmw"];
console.log(cars);// ["nissan","audi","bmw"]
console.log("***********************************");

let student=new Array("umesh","rahul","ratan");
console.log(student);//["umesh","rahul","ratan"]
console.log(student[2]);["ratan"]
console.log("***********************************");

let Myarray=[10,"umesh",10.6,null,true];
console.log(Myarray); //[10,"umesh",10.6,null,true]

console.log("***********************************");

let person1=
{
	name:"umesh",age:30
};
let person2=
{
	name:"ajinkya",age:29
};

let array=[person1,person2];
console.log(array);  // [{name:'umesh',age:30},{name:'ajinkya',age:29}]
console.log(array[1]);// {name:'ajinkya',age:29}
console.log("***********************************");

let company=["TCS","InFY","Cognizant","CapG"];
console.log(company.length);//4
console.log("***********************************");
//for loop 
for(let i=0;i<=company.length;i++)
{
	console.log(company[i]);
}
console.log("***********************************");
// for--of loop
for(ele of company)
{
	console.log(ele);
}

console.log(Array.isArray(company));
console.log(typeof company);
