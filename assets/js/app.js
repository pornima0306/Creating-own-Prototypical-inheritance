let cl = console.log;
/* ==============Common method================== */

function Shape(){

}
Shape.prototype.duplicate = function(){
    cl(`Duplicate`)
}

/* =========================================== */



function Circle (radius){
    this.radius = radius;
    /* this.draw = function(){
        cl(`Circle is drawn with radius ${this.radius}`)
    } */
}

//Circle Constructor>> CircleBase >> ObjectBase
//Circle.prototype = Object.create(Object)
//Circle Constructor >> CircleBase(Circle.prototype) >> (Object >> ShapeBase(Shape.prototype)) >> ObjectBase
Circle.prototype = Object.create(Shape.prototype)  // created own Prototype
Circle.prototype.constructor = Circle   // we have to reset the constructor when we creating own prototype

Circle.prototype.draw = function(){
    cl(`Circle is drawn with radius ${this.radius}`)  
}

/* Circle.prototype.duplicate = function(){  // this is a common method in Circle and Square
    cl(`Duplicate`)
} */

let c= new Circle(10)
cl(c)
c.duplicate()
/* ------------------------------------------------------------ */

function Square(side){
    this.side = side;
}
Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square
/* Square.prototype.duplicate = function(){
    cl('Duplicate')
} */

let s = new Square(100)
cl(s)
s.duplicate()
