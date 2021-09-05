import { Coach } from "./Coach";

export class CricketCoach implements Coach{
    getDayliWorkout(): string {
        return "Practice youe spin bowling technique";
    }

}