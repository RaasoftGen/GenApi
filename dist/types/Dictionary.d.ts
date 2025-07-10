import type { DictionaryPair } from './DictionaryPair';
/**
 * @internal
 */
export default class Dictionary<K, V> {
    #private;
    /**
     * Object holding the key-value pairs.
     * @typeParam K - key
     * @typeParam V - value
     */
    protected table: Map<string, DictionaryPair<K, V>>;
    /**
     * Creates an empty dictionary.
     * <p>Dictionaries map keys to values; each key can map to at most one value.
     * This implementation accepts any kind of objects as keys.</p>
     *
     * <p>If the keys are custom objects a function which converts keys to unique
     * strings must be provided. Example:</p>
     * @example
     * ```javaScript
     * function petToString(pet) {
     *  return pet.name;
     * }
     * ```
     * to convert keys to strings. If the keys aren't strings or if toString()
     * is not appropriate, a custom function which receives a key and returns a
     * unique string must be provided.
     */
    constructor();
    /**
     * Returns the value to which this dictionary maps the specified key.
     * Returns undefined if this dictionary contains no mapping for this key.
     * @internal
     * @param key - key whose associated value is to be returned.
     * @returns the value to which this dictionary maps the specified key or undefined if the map contains no mapping for this key.
     */
    getValue(key: K): V | undefined;
    /**
     * Associates the specified value with the specified key in this dictionary.
     * If the dictionary previously contained a mapping for this key, the old
     * value is replaced by the specified value.
     * @internal
     * @param key - key with which the specified value is to be associated.
     * @param value - value to be associated with the specified key.
     * @returns previous value associated with the specified key, or undefined if there was no mapping for the key or if the key/value are undefined.
     */
    setValue(key: K, value: V): V | undefined;
    /**
     * Removes the mapping for this key from this dictionary if it is present.
     * @internal
     * @param key - key whose mapping is to be removed from the dictionary.
     * @returns previous value associated with specified key, or undefined if there was no mapping for key.
     */
    remove(key: K): V | undefined;
    /**
     * Returns an array containing all of the keys in this dictionary.
     * @internal
     * @returns an array containing all of the keys in this dictionary.
     */
    keys(): K[];
    /**
     * Returns an array containing all of the values in this dictionary.
     * @internal
     * @returns an array containing all of the values in this dictionary.
     */
    values(): V[];
    /**
     * Returns true if this dictionary contains a mapping for the specified key.
     * @internal
     * @param key - key whose presence in this dictionary is to be tested.
     * @returns true if this dictionary contains a mapping for the specified key.
     */
    containsKey(key: K): boolean;
    /**
     * Removes all mappings from this dictionary.
     * this - collections.Dictionary
     * @internal
     */
    clear(): void;
    /**
     * Returns the number of keys in this dictionary.
     * @internal
     * @returns the number of key-value mappings in this dictionary.
     */
    size(): number;
    /**
     * Returns true if this dictionary contains no mappings.
     * @internal
     * @returns true if this dictionary contains no mappings.
     */
    isEmpty(): boolean;
    /**
     * @internal
     */
    toString(): string;
}
