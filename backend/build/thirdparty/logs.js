"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logs {
    constructor(isConsoleUse = true) {
        this.isConsoleUse = true;
        this.isConsoleUse = true;
    }
    info(message) {
        if (this.isConsoleUse)
            console.log(message);
    }
    error(message) {
        if (this.isConsoleUse)
            console.error(message);
    }
    warn(message) {
        if (this.isConsoleUse)
            console.warn(message);
    }
}
exports.default = new Logs();
//# sourceMappingURL=logs.js.map