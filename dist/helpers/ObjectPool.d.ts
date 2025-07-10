import type { GenericType } from '../types';
/**
 * @public
 */
export default class ObjectPool {
    #private;
    static getInstance<T>(type: GenericType<T>, id?: string): {
        instance: T;
        poolId: string;
    };
    static getInstanceIfExist<T>(type: GenericType<T>): T | null;
    static clear<T>(poolId?: string, exceptPoolIds?: Array<string>): void;
    static setInstance<T extends object>(type: GenericType<T>, objInstance: T, overwrite?: boolean): string;
}
