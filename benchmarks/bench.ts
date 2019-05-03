import { ps } from "../lib";
import * as psList from "ps-list";

(async () => {

    let start;
    let elapsed;

    start = process.hrtime()
    await ps({ selection: "all" }, "cmd", "comm", "pid", "lstart", "etime");
    elapsed = process.hrtime(start)

    console.log("Implementation: jarvisprestidge/ps");
    console.log(`Execution time: ${elapsed[0]}s ${elapsed[1] / 1000000}ms`)

    console.log("\n==================================\n")

    start = process.hrtime()
    await psList();
    elapsed = process.hrtime(start)

    console.log("Implementation: sindresorhus/ps-list");
    console.log(`Execution time: ${elapsed[0]}s ${elapsed[1] / 1000000}ms`)

})();
