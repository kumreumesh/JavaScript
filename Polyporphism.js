class Shape
{
   draw()
      {
         return "i am generic shape";
      }
}
class Square extends Shape 
      {
    draw()
      {
          return "i am square";
      }
}
class Circle extends Shape
     {
     draw()
       {
          return "i am Circle";
       }
}

let s=new Shape();
console.log(s.draw());

s=new Square();
console.log(s.draw());

s=new Circle();
console.log(s.draw());