"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mikro_orm_1 = require("mikro-orm");
const uuid_1 = require("uuid");
let User = class User {
    constructor(login, password, city, age, mail) {
        this.uuid = uuid_1.v4();
        this.login = login;
        this.password = password;
        this.city = city;
        this.age = age;
        this.mail = mail;
    }
};
tslib_1.__decorate([
    mikro_orm_1.PrimaryKey(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "uuid", void 0);
tslib_1.__decorate([
    mikro_orm_1.Property(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "login", void 0);
tslib_1.__decorate([
    mikro_orm_1.Property(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    mikro_orm_1.Property(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "city", void 0);
tslib_1.__decorate([
    mikro_orm_1.Property(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "age", void 0);
tslib_1.__decorate([
    mikro_orm_1.Property(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "mail", void 0);
User = tslib_1.__decorate([
    mikro_orm_1.Entity(),
    tslib_1.__metadata("design:paramtypes", [String, String, String, Number, String])
], User);
exports.User = User;
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
//# sourceMappingURL=user.js.map