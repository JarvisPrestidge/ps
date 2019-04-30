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
const ps_1 = require("./ps");
// export { ps as default } from "./ps";
(() => __awaiter(this, void 0, void 0, function* () {
    const results = yield ps_1.ps("pid", "lstart", "etime", "cmd");
    if (!results.length) {
        throw new Error("Noooooooooo");
    }
    const chromiumProcesses = results.filter((p) => /chrome/i.test(p.CMD));
    console.log(chromiumProcesses);
}))();
//# sourceMappingURL=index.js.map