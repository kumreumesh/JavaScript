function Student()
{
this.id="111";
this.name="umesh";
}


Student.prototype.age=30;

let s=new Student();
//s.age=80;

console.log(s.id+" "+s.name+" "+s.age);

let ss=new Student();
//ss.age=70;

console.log(ss.id+" "+ss.name+" "+ss.age);






