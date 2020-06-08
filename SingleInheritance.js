class A
{
	a=100;
	display()
	{
		console.log(this.a);
	}
}
class B extends A
{
	b=400;
	show()
	{
		console.log(this.b);
	}
}

bobj=new B();
bobj.display();
bobj.show();