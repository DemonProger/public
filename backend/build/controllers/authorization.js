"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const logs_1 = require("../thirdparty/logs");
const user_1 = require("../models/user");
class AuthController {
    constructor(model) {
        this.model = model;
    }
    registerUser(req, resp) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const user = user_1.default.parseUser(body);
                if (this.model.isUserRegistered(user)) {
                    resp.status(406).end("User is registered");
                }
                this.model.registerUser(user);
                resp.status(200).end("User added");
            }
            catch (e) {
                this.handleException(e, resp);
            }
        });
    }
    handleException(exception, resp) {
        resp.status(500).end(exception.stack);
        logs_1.default.error(exception.stack);
    }
}
exports.default = AuthController;
//# sourceMappingURL=authorization.js.map