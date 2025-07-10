/**
 * UpdateDataFramework
 * @public
 */
export declare class UpdateDataFramework {
    Name: string;
    Command: string;
    Key: string;
    Section: string;
    Value?: string;
    constructor(name: string, command: string, section: string, key: string, value?: string);
}
/**
 * @public
 */
export default class DataFrameWork {
    #private;
    static className: string;
    static set(section: string, key: string, value: string): void;
    static clear(section: string, key: string): void;
    static deleteSection(section: string): void;
}
