/**
 * @public
 */
export default class ObjectUtils {
    /**
     * @internal
     */
    static getFunctionName(fun: Function): string;
    /**
     * @internal
     */
    static getTypeName<T>(type: new () => T): string;
    /**
     * @internal
     */
    static getStrictTypeObject<T>(objInstance: any): T;
}
