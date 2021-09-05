import { Coach } from "./Coach";

export class GolfCoach implements Coach{
    getDayliWorkout(): string {
        return "Hit 100 balls at the golf range";
    }

}