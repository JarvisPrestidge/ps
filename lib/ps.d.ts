import { FormatSpecifierCode, IPsProcess } from "./interfaces/IPsProcess";
/**
 * Fetches running process list information
 *
 * @param {...FormatSpecifierCode[]} formatSpecifiersCodes
 * @returns {Promise<IProcess[]>}
 */
export declare const ps: (...formatSpecifiersCodes: FormatSpecifierCode[]) => Promise<IPsProcess[]>;
