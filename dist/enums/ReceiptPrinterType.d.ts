/**
 * Defines the ReceiptPrinter type
 *
 * @public
 */
export declare const ReceiptPrinterType: {
    readonly NONE: "NONE";
    readonly NORMAL: "NORMAL";
};
/**
 * @public
 */
export type ReceiptPrinterType = (typeof ReceiptPrinterType)[keyof typeof ReceiptPrinterType];
