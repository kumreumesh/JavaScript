class Animal
{
	constructor(color)
	{
		this.color=color;
	}
	
	printColor()
	{
	   console.log("Color is :",this.color);
	}
}

class Dog extends Animal
{
	constructor(color,food)
	{
		super(color);
		this.food=food;
	}
	
	eating()
	{
		console.log("Eating:",this.food);
	}
	
	display()
	{
		this.printColor();
		this.eating();
	}
}
dobj=new Dog("yellow","bread-butter");
dobj.printColor();
dobj.eating();
dobj.display();