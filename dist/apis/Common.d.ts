import DeviceBase from './DeviceBase';
import { AllDeviceStatusResponse } from '../models';
import { AIDInfo, SectionInfo } from '../types';
/**
 * @group API
 * This class is made up of functions related to getting common information.
 * The methods, except for {@link addListener} and {@link removeListener}, are all asynchronous.
 * So the caller should register a callback function to receive the corresponding response by using an
 * `{@link addListener}` before calling a method or pass the callback function as a parameter
 * depending on the method. Also, when it finishes controlling the device,
 * it should `{@link removeListener}` to stop receiving responses.
 */
export default class Common extends DeviceBase {
    #private;
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function that gets device list information from ATM.
     *
     * @param getAllDevieStatusEventCallback - The callback function to receive the `{@link getAllDevieStatusEventCallback}` as the result of the operation.
     */
    getAllDeviceStatus(getAllDevieStatusEventCallback: (obj: AllDeviceStatusResponse) => void): void;
    /**
     * @remarks This function is currently under development. Currently this device is not supported by the simulator.
     * @description A function that commands to write journal.
     * As the result of the operation, an `{@link TransactionResponse}` response will be sent.
     *
     * @param journalContent - The journal content
     */
    writeJournal(journalContent: string): void;
    /**
     * A function that commands to write mdb journal.
     * As the result of the operation, an `{@link TransactionResponse}` response will be sent.
     *
     * @param transactionType - Transaction type (eg. 'WA')
     * @param journalContents - The journal content (eg. ['key=value', 'key=value'])
     */
    writeMDBJournal({ transactionType, journalContents, }: {
        transactionType?: string;
        journalContents: Array<string>;
    }): void;
    /**
     * A function that commands to get section list.
     * As the result of the operation, an {@link SectionDictionary} response will be sent.
     *
     * @param sectionList - Section key list
     */
    getSectionDataList(sectionList: Array<string>): void;
    /**
     * A function that commands to set section list.
     * As the result of the operation, an {@link SectionDictionary} response will be sent.
     *
     * @param sectionList - Section list
     */
    setSectionDataList(sectionInfoList: Array<SectionInfo>): void;
    /**
     * A function that commands to get AID Info list.
     * As the result of the operation, an {@link RetrieveEMVAIDInfoResponse} response will be sent.
     *
     
     */
    retrieveEMVAIDInfo(): void;
    /**
     * A function that commands to set AID Info list.
     * As the result of the operation, an {@link UpdateEMVAIDInfoResponse} response will be sent.
     *
     */
    updateEMVAIDInfo({ countryCode, terminalType, terminalCapability, floorLimit, applicationVersion, aIDInfos, }: {
        countryCode: string;
        terminalType: string;
        terminalCapability: string;
        floorLimit: string;
        applicationVersion: string;
        aIDInfos: Array<AIDInfo>;
    }): void;
}
