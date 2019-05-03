import { exec } from "child_process";
import { FormatSpecifierCode, PsProcess } from "./interfaces/IPsProcess";
import { promisify } from "util";
import { PsOptions } from "./interfaces/IPsOptions";

const execAsync = promisify(exec);

/**
 * Fetch running process list info
 *
 * @template T
 * @param {PsOptions} [options]
 * @param {...T[]} args
 * @returns {Promise<PsProcess<T>[]>}
 */
export const ps = async <T extends FormatSpecifierCode>(options?: PsOptions, ...args: T[]): Promise<PsProcess<T>[]> => {

    const TEN_MEGABYTES = 1000 * 1000 * 10;

    const PS_COMMAND = "ps";
    const PS_SEPARATOR = " -o '|%n|' -o ";

    let selectionFlag;

    if (options && options.selection) {
        const selection = options.selection;
        switch (selection) {
            case "tty": selectionFlag = ""; break;
            case "user": selectionFlag = "x"; break;
            case "all": selectionFlag = "a"; break;
            case "running": selectionFlag = "r"; break;
            default: selectionFlag = "a"; break;
        }
    }

    args.push(args.splice(args.indexOf("cmd" as T), 1)[0]);

    const flags = `-ww${selectionFlag}o`;
    const formatArgs = args.join(PS_SEPARATOR);

    const command = `${PS_COMMAND} ${flags} ${formatArgs}`;

    const { stdout, stderr } = await execAsync(command, { maxBuffer: TEN_MEGABYTES });

    if (stderr) {
        throw new Error(`executing ps command failed with the following: ${stderr}`);
    }

    const lines = stdout.split("\n").slice(1);

    const processList: PsProcess<T>[] = [];

    for (const line of lines) {

        const metrics = line
            .split(/\|\s*-?\d{1,2}\|/)
            .map((m) => m.trim());

        const process: PsProcess<T> = {} as any;

        for (const [index, value] of metrics.entries()) {
            const code = args[index];
            process[code as T] = value;
        }

        processList.push(process);
    }

    return processList;
};
