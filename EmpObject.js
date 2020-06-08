let Employee=
{
empId   :12345,
empName:"umesh",
companyLoc:"Kharadi",
BasicSal  :20000,

bonus:function()
      {
	     return((this.BasicSal*10)/100);
      }
};

console.log(Employee["empId"]);//12345
console.log(Employee.empId);//12345

console.log(Employee["empName"]);//umesh

console.log(Employee["BasicSal"]);//20000

console.log(Employee["bonus"]);//[function :bonus]
console.log(Employee.bonus());//2000  

