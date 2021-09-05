import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let myCircle = new Circle (1,4, 10);
let myRectangle = new Rectangle (1,5,10,15);

let theShapes: Shape [] = [];


theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}