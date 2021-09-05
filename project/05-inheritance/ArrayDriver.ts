import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape (10, 15);
let myCircle = new Circle (1,4, 10);
let myRectangle = new Rectangle (1,5,10,15);

let theShapes: Shape [] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let allShapes of theShapes){
    console.log(allShapes.getInfo());
}