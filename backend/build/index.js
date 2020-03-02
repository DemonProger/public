"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const logs_1 = tslib_1.__importDefault(require("./thirdparty/logs"));
const server_1 = tslib_1.__importDefault(require("./server"));
const mikro_orm_1 = require("mikro-orm");
const user_1 = require("./models/user");
const dotenv = tslib_1.__importStar(require("dotenv"));
dotenv.config();
const start = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const server = new server_1.default();
        server.start(parseInt(process.env.PORT || "3000"));
        const orm = yield mikro_orm_1.MikroORM.init({
            entities: [user_1.User],
            dbName: process.env.DB_NAME || "db name is not setted in .env file",
            clientUrl: 'postgresql://localhost:54332',
            type: 'postgresql',
            autoFlush: false
        });
        console.log(orm.em);
    }
    catch (e) {
        logs_1.default.error(e.message + " " + e.stack);
    }
});
start();
//# sourceMappingURL=index.js.map