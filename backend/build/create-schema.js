"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mikro_orm_1 = require("mikro-orm");
const user_1 = require("./models/user");
exports.default = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const orm = yield mikro_orm_1.MikroORM.init({
        entities: [user_1.User],
        dbName: process.env.DB_NAME || "db name is not setted in .env file",
        clientUrl: 'postgresql://localhost:5432',
        type: 'postgresql'
    });
    const generator = orm.getSchemaGenerator();
    const dropDump = yield generator.getDropSchemaSQL();
    console.log(dropDump);
    const createDump = yield generator.getCreateSchemaSQL();
    console.log(createDump);
    const updateDump = yield generator.getUpdateSchemaSQL();
    console.log(updateDump);
    const dropAndCreateDump = yield generator.generate();
    console.log(dropAndCreateDump);
    yield generator.dropSchema();
    yield generator.createSchema();
    yield generator.updateSchema();
    yield orm.close(true);
});
//# sourceMappingURL=create-schema.js.map