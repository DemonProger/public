"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bodyParser = tslib_1.__importStar(require("body-parser"));
const core_1 = require("@overnightjs/core");
const logs_1 = tslib_1.__importDefault(require("./thirdparty/logs"));
const express = require('express');
const path = require('path');
const users_1 = tslib_1.__importDefault(require("./controllers/users"));
const user_1 = require("./models/user");
class BackServer extends core_1.Server {
    constructor() {
        super(true);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.static(path.join(__dirname, process.env.PUBLIC_PATH)));
        this.setupControllers();
    }
    start(port) {
        this.app.listen(port, () => {
            logs_1.default.info(`Server started on port ${port}`);
        });
    }
    setupControllers() {
        const usersController = new users_1.default(new user_1.UserModel());
        this.app.post("/user", usersController.registerUser.bind(usersController));
    }
}
exports.default = BackServer;
//# sourceMappingURL=server.js.map