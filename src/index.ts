import { ps } from "./ps";

// export { ps as default } from "./ps";


(async () => {
    const results = await ps("pid", "lstart", "etime", "cmd");

    if (!results.length) {
        throw new Error("Noooooooooo");
    }

    const chromiumProcesses = results.filter((p) => /chrome/i.test(p.CMD));

    console.log(chromiumProcesses);
})();
