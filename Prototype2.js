class Employee
{
  constructor(eid,ename)
  {
	  this.eid=eid;
	  this.ename=ename;
  }
}

Employee.prototype.esal=40000;

Employee.prototype.display=function()
                           {
	                          console.log(this.eid,this.ename,this.esal);         
                           }

eobj=new Employee(111,"umesh");
//console.log(eobj.eid,eobj.ename,eobj.esal);
eobj.display();

eobj1=new Employee(222,"akash");
//console.log(eobj1.eid,eobj1.ename,eobj1.esal);
eobj1.display();