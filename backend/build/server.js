"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const core_1 = require("@overnightjs/core");
const logs_1 = require("./thirdparty/logs");
class BackServer extends core_1.Server {
    constructor() {
        super(true);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.setupControllers();
    }
    start(port) {
        this.app.listen(port, () => {
            logs_1.default.info(`Server started on port ${port}`);
        });
    }
    setupControllers() {
    }
}
exports.default = BackServer;
//# sourceMappingURL=server.js.map