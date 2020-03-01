"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class Queries {
    static addUser(u) {
        return "";
    }
}
class UserModel {
    constructor() {
    }
    isUserRegistered(u) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return false;
        });
    }
    registerUser(u) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    static parseUser(data) {
        const requiredProps = [
            "login",
            "password",
            "city",
            "age",
            "email"
        ];
        for (const prop of requiredProps)
            if (data[prop] === undefined)
                throw Error(`Deserializing User error. ${prop} is missed in ${JSON.stringify(data)}`);
        return data;
    }
}
exports.UserModel = UserModel;
exports.default = UserModel;
//# sourceMappingURL=user.js.map