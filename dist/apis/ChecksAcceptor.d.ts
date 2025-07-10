import DeviceBase from './DeviceBase';
/**
 * @group API
 * @remarks This class is currently under development. Currently this device is not supported by the simulator.
 * @description This class consists of functions related to the deposit transaction such as
 * [[acceptCash]], [[verifyConfirmDeposit]], [[commit]], etc.
 * The methods, except for addListener and removeListener, are all asynchronous.
 * So the caller should register a callback function to receive the corresponding response by using an
 * [[addListener]] before calling a method or pass the callback function as a parameter
 * depending on the method. Also, when it finishes controlling the transaction,
 * it should [[removeListener]] to stop receiving responses.
 */
export default class ChecksAcceptor extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function that starts a check deposit transaction, waits for a customer to insert checks,
     * and completes recognizing the inserted checks.
     * The responses such as [[MediaInserted]], [[MediaPresented]], [[MediaTaken]],
     * [[TaskTimeout]], and [[ReadMediaCompleted]] can be passed to the [[dataCallback]] function.
     */
    acceptChecks(): void;
    /**
     * A function that returns the checks to a customer and waits for the customer to take the checks.
     * As the result of the operation, [[MediaPresented]] and [[TaskCompleted]] are sent.
     * When a customer has not take the returned checks after a certain amount of time,
     * the ATM tries to retract the checks and sends the result in the [[Detail]] field of [[TaskCompleted]] response.
     */
    returnChecks(): void;
    /**
     * A function that asks you to deposit a cash or check to finish the transaction.
     * Depending on the transaction type, corresponding responses will be sent.
     * If it is a cash deposit, a [[CommitDepositCompleted]] or [[TaskCompleted]] with an error will be sent.
     * If it is a check deposit, in addition to [[CommitDepositCompleted]] and [[TaskCompleted]],
     * [[MediaPresented]] responses could be sent when a customer selects some checks to be returned.
     */
    commit(): void;
    /**
     * A function that cancels the requests for accepting cash or checks.
     * A [[TaskCanceled]] response will be sent if the operation can be canceled.
     */
    cancel(): void;
}
