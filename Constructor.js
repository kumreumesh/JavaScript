class Student
{
	constructor(sid,sfname,slname)
	{
		this.sid=sid;
		this.sfname=sfname;
		this.slname=slname
		
	}
	
	display()
	{
		console.log(this.sid,this.sfname,this.slname);
	}
}
let stud1=new Student(111,"umesh","kumre");
stud1.display();
let stud2=new Student(222,"Akash","jadhav");
stud2.display();
let stud3=new Student(333,"Ramesh","Dev");
stud3.display();
