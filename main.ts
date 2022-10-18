/**
 * MicrobitBot Module
 */
//% weight=100 color=#F38020 icon="\uf0eb" block="MicrobitBot"
namespace microbitBot {
    /**
     * Bot goes forward by inputted distance in cm
     */
    //% blockId = "MicrobitBot_forward" block="forward by $distance"
    //% weight = 100
    //% distance.min=0 distance.max=100
    export function forward(distance: number): void {
        const run_time = distance * 500;
        basic.showString("HELLO!" + run_time);
        pins.digitalWritePin(DigitalPin.P0, 1);
        pause(run_time);
        pins.digitalWritePin(DigitalPin.P0, 0);
    }

    /**
     * Bot will turn left (counterclockwise) by inputted angle; is a relative angle to current
     * position
     */
    //% blockId = "MicrobitBot_turnLeft" block = "turn left by $angle"
    //% weight = 30
    //% angle.min = 0 angle.max = 360
    export function turnLeft(angle: number): void {
        //TODO: ideally add code to make the bot turn by a certain amount
        basic.showString("LEFT" + angle);
        pins.digitalWritePin(DigitalPin.P1, 1);
        pause(2000);
        pins.digitalWritePin(DigitalPin.P1, 0);
    }

    /**
     * Bot will turn right (clockwise) by inputted angle; is a relative angle to current
     * position
     */
    //% blockId = "MicrobitBot_turnRight" block = "turn right by $angle"
    //% angle.min = 0 angle.max = 360
    //% weight = 10
    export function turnRight(angle: number): void {
        //TODO: ideally add code to make the bot turn by a certain amount
        basic.showString("RIGHT" + angle);
        pins.digitalWritePin(DigitalPin.P2, 1);
        pause(2000);
        pins.digitalWritePin(DigitalPin.P2, 0);
    }
}