import { Shape } from "./Shape";

export class Circle extends Shape {

    

    constructor(theX: number, theY: number, private _raduius: number) {
         super(theX, theY);
    }

    get radius(): number {
        return this._raduius;
    }

    set radius(value: number) {
        this._raduius = value;
    }

    getInfo(): string {
        return super.getInfo() + ` radius = ${this._raduius}`;
    }
}