"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const util_1 = require("util");
const execAsync = util_1.promisify(child_process_1.exec);
/**
 * Fetches running process list information
 *
 * @param {...FormatSpecifierCode[]} formatSpecifiersCodes
 * @returns {Promise<IProcess[]>}
 */
exports.ps = (...formatSpecifiersCodes) => __awaiter(this, void 0, void 0, function* () {
    const TEN_MEGABYTES = 1000 * 1000 * 10;
    const PS_COMMAND = "ps";
    const PS_FLAGS = "-wwxeo";
    const COLUMN_SEPARATOR = " -o '|%n|' -o ";
    const formatArgs = formatSpecifiersCodes.join(COLUMN_SEPARATOR);
    const command = `${PS_COMMAND} ${PS_FLAGS} ${formatArgs}`;
    const { stdout, stderr } = yield execAsync(command, { maxBuffer: TEN_MEGABYTES });
    if (stderr) {
        throw new Error(`executing ps command failed with the following: ${stderr}`);
    }
    const lines = stdout
        .trim()
        .split("\n")
        .map((l) => l.trim());
    const headerLine = lines.shift();
    if (!headerLine) {
        throw new Error("executing ps command failed for unknown reason");
    }
    const headers = headerLine.split(/\|.*?\|/).map((c) => c.trim());
    const processList = [];
    for (const line of lines) {
        const values = line.split(/\|.*?\|/).map((c) => c.trim());
        const process = {};
        for (const [index, value] of values.entries()) {
            const processKey = headers[index];
            process[processKey] = value;
        }
        processList.push(process);
    }
    return processList;
});
//# sourceMappingURL=ps.js.map