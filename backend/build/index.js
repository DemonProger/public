"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const logs_1 = require("./thirdparty/logs");
const server_1 = require("./server");
const dotenv = require("dotenv");
dotenv.config();
const start = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const server = new server_1.default();
        server.start(parseInt(process.env.PORT || "3000"));
    }
    catch (e) {
        logs_1.default.error(e.message + " " + e.stack);
    }
});
start();
//# sourceMappingURL=index.js.map