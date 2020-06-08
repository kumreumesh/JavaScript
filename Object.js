let person=

{
  firstname:"umesh",
  lastname :"kumre",
  age      : 30,
  mobNo    :8177941029,
  emailId  :"uk@yahoo.com"
}

//accessing object properties

console.log(person["firstname"]); 
console.log(person.firstname);
console.log(person.age);
console.log(person["age"]);

console.log("***********");
//add new property to existing object

person["weight"]=60;
console.log(person.weight);

person["company"]="TCS";
console.log(person["company"]);

console.log("***********");
// update existing property
person["age"]=26;
console.log(person.age);

console.log("***********"); 
//delete existing property

delete person["mobNo"];
console.log(person.mobNo);

console.log("**********Looping Object***********")
for(let x in person)
{
	//console.log(x);// return only property
	//console.log(person[x]);//return property value
	console.log(x+"--->"+person[x]);// return both property and value 
}