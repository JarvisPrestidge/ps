import { exec } from "child_process";
import { FormatSpecifierCode, IPsProcess, FormatSpecifierHeader } from "./interfaces/IPsProcess";
import { promisify } from "util";

const execAsync = promisify(exec);

/**
 * Fetches running process list information
 *
 * @param {...FormatSpecifierCode[]} formatSpecifiersCodes
 * @returns {Promise<IProcess[]>}
 */
export const ps = async (...formatSpecifiersCodes: FormatSpecifierCode[]): Promise<IPsProcess[]> => {

    const TEN_MEGABYTES = 1000 * 1000 * 10;

    const PS_COMMAND = "ps";
    const PS_FLAGS = "-wwxeo";
    const COLUMN_SEPARATOR = " -o '|%n|' -o ";

    const formatArgs = formatSpecifiersCodes.join(COLUMN_SEPARATOR);

    const command = `${PS_COMMAND} ${PS_FLAGS} ${formatArgs}`;

    const { stdout, stderr } = await execAsync(command, { maxBuffer: TEN_MEGABYTES });

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

    const processList: IPsProcess[] = [];

    for (const line of lines) {

        const values = line.split(/\|.*?\|/).map((c) => c.trim());

        const process: IPsProcess = {};

        for (const [index, value] of values.entries()) {
            const processKey = headers[index];
            process[processKey as FormatSpecifierHeader] = value;
        }

        processList.push(process);
    }

    return processList;
};
