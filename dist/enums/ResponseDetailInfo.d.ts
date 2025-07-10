/**
 * Specifies the additional detail status of the command result
 * such as OK, ERROR, TIMEOUT, RETRACTED, etc.
 * @enum
 */
export declare const ResponseDetailInfo: {
    /**
     * The command completed the operation without an error.
     */
    readonly OK: "OK";
    /**
     * The command completed the operation with an error.
     */
    readonly ERROR: "ERROR";
    /**
     * Stacker Status is FULL after the operation completed.
     */
    readonly FULL: "FULL";
    /**
     * The command completed successfully and cash was retracted.
     */
    readonly RETRACTCASH: "OK|RETRACTED_CASH";
    /**
     * The command operation timed out and as a result, cash was retracted.
     */
    readonly RETRACTCASH_2: "TIMEOUT|RETRACTED_CASH";
    /**
     * The command operation timed out and as a result, check(s) were retracted.
     */
    readonly RETRACTCHECK: "TIMEOUT|RETRACTED_CHECK";
    /**
     * The command completed successfully and check(s) were retracted.
     */
    readonly RETRACTCHECK_2: "OK|RETRACTED_CHECK";
    /**
     * Stacker Status is NOTEMPTY after the operation completed.
     */
    readonly NOTEMPTY: "NOTEMPTY";
    /**
     * Stacker Status is EMPTY after the operation completed.
     */
    readonly EMPTY: "EMPTY";
    /**
     * The command operation timed out.
     */
    readonly TIMEOUT: "TIMEOUT";
    /**
     * Media is present after the operation completed.
     */
    readonly PRESENT: "PRESENT";
    /**
     * Media is not present after the operation completed.
     */
    readonly NOTPRESENT: "NOTPRESENT";
    /**
     * Stacker is not empty.
     */
    readonly STACKER_NOTEMPTY: "STACKER_NOTEMPTY";
    /**
     * Stacker is empty.
     */
    readonly STACKER_EMPTY: "STACKER_EMPTY";
    /**
     * Transaction is completed.
     */
    readonly TRANSACTIONCOMPLETED: "TRANSACTIONCOMPLETED";
    /**
     * Task Cancelled.
     */
    readonly CANCELLED: "CANCELLED";
    /**
     * Shutter open process is completed.
     */
    readonly SHUTTER_OPEN: "SHUTTER_OPEN";
    /**
     * Shutter close process is completed.
     */
    readonly SHUTTER_CLOSE: "SHUTTER_CLOSE";
    /**
     * Check accept process is completed.
     */
    readonly MEDIAINSTART: "MEDIAINSTART";
    /**
     * Check deposit takecash process is completed.
     */
    readonly STARTRETRACT: "STARTRETRACT";
    /**
     * HOST NG
     */
    readonly NG: "NG";
    /**
     * INCORRECT PIN
     */
    readonly INCORRECT_PIN: "INCORRECTPIN";
    /**
     * Pin mismatch(use Change Pin transaction)
     */
    readonly MISMATCH_PIN: "MISMATCHPIN";
    /**
     *
     */
    readonly RETRACT: "RETRACT";
    /**
     * Item refused
     */
    readonly REFUSED: "REFUSED";
    /**
     * Wrong PIN 3 times
     */
    readonly WRONGPIN: "WRONGPIN3TIMES";
    /**
     * Insufficient balance
     */
    readonly INSUFFICIENTBALANCE: "INSUFFICIENTBALANCE";
    /**
     * Note SKEW
     */
    readonly SKEW: "SKEW";
};
/**
 * Specifies the additional detail status of the command result
 * such as OK, ERROR, TIMEOUT, RETRACTED, etc.
 * @enum
 */
export type ResponseDetailInfo = (typeof ResponseDetailInfo)[keyof typeof ResponseDetailInfo];
