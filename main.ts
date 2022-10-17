namespace microbitBot {
    /**
     * Bot goes forward by inputted distance in cm
     */
    //% blockId = microbitbotforward
    //% block="forward by"
    //% distance.min=0 distance.max=100
    export function forward(distance: number) : void {
        const run_time = distance * 500;
        basic.showString("HELLO!" + run_time);
    }
}