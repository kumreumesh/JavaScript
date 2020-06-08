class Student
{
  constructor()
  {
	  let sname,marks;
  }
  
  getName()
  {
	  return this.sname;
  }
  setName(sname)
  {
	  this.sname=sname;
  }
  
   getMarks()
  {
	  return this.marks;
  }
  setMarks(marks)
  {
	  this.marks=marks;
  }
}

let stud=new Student();  
stud.setName("umesh");
stud.setMarks(90);
console.log(stud.getName()+"  "+stud.getMarks());

