import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape (10, 15);
console.log(myShape.getInfo());

let myCircle = new Circle (1,4, 10);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle (1,5,10,15);
console.log(myRectangle.getInfo());