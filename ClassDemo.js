class Student
{
	setDetails(sid,sfname,slname)
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
let stud=new Student();
stud.setDetails(111,"umesh","kumre");
stud.display();

let stud1=new Student();
stud1.setDetails(222,"ajinkya","hiwale");
stud1.display();

