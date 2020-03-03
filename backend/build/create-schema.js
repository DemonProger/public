"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mikro_orm_1 = require("mikro-orm");
const user_1 = require("./models/user");
exports.default = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const orm = yield mikro_orm_1.MikroORM.init({
        entities: [user_1.User],
        dbName: process.env.DB_NAME || "db name is not setted in .env file",
        password: process.env.DB_PASSWORD || "password is not setted in .env file",
        type: 'postgresql',
        host: process.env.DB_HOST || "localhost",
        port: parseInt("" + process.env.DB_PORT) || 5432,
        user: process.env.DB_USER || "postgres"
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
    yield generator.updateSchema();
    yield orm.close(true);
});
//# sourceMappingURL=create-schema.js.map