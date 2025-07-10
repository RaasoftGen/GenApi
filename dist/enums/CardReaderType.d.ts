/**
 * Defines the Card Reader type
 * @public
 */
export declare const CardReaderType: {
    /**
     * DIP
     */
    readonly DIP: "DIP";
    /**
     * LATCHEDDIP
     */
    readonly LATCHEDDIP: "LATCHEDDIP";
    /**
     * MOTOR
     */
    readonly MOTOR: "MOTOR";
    /**
     * SWIPE
     */
    readonly SWIPE: "SWIPE";
};
/**
 * @public
 */
export type CardReaderType = (typeof CardReaderType)[keyof typeof CardReaderType];
