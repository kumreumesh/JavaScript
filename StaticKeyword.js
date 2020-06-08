class Test
{
	static a=100;// static variable
	b=200;// non static variable
	
	static m1()
	{
		console.log("I am m1 static method ");
	}
	
	 m2()
	{
		console.log("I am m2 Non-static method ");
	}
	
}

// access static variable and method by using class name
console.log(Test.a);// 100
Test.a=1000;
console.log(Test.a);

Test.m1();
//console.log(Test.m2());

// access nonstatic variable and method by using object ref var
let t=new Test();
console.log(t.b);// 200
//console.log(Test.b);//undefined
t.m2();//  I am m2 Non-static method