"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const logs_1 = tslib_1.__importDefault(require("../thirdparty/logs"));
const user_1 = require("../models/user");
class UsersController {
    constructor(model) {
        this.model = model;
    }
    registerUser(req, resp) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                logs_1.default.info(`registerUser: ${JSON.stringify(req.body)}`);
                const body = req.body;
                const user = user_1.UserModel.parseUser(body);
                if (yield this.model.isUserRegistered(user)) {
                    resp.status(200).end("User successfully added");
                }
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
exports.default = UsersController;
//# sourceMappingURL=users.js.map