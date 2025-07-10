/**
 * @public
 */
export type GenericType<T> = {
    new (...args: any[]): T;
};
