import { Tag } from '../enums';
/**
 * WARPJsonFormat
 * @public
 */
export default class WARPJsonFormat {
    Name: string;
    Tag?: Tag;
    DataParameter?: string;
    Type?: string;
    constructor(name: string, tag?: Tag, parameter?: string);
}
