
import logs from "./thirdparty/logs"
import BackServer from './server'

// import MikroORM from 'mikro-orm'
const MikroORM = require('mikro-orm')

import * as dotenv from "dotenv"
dotenv.config()


const start = async () => {
    try {
        const server = new BackServer()
        server.start(parseInt(process.env.PORT || "3000"))

        const orm = await MikroORM.init({
            entities: [],
            dbName: process.env.DB_NAME,
            clientUrl: 'postgresql://localhost:54332',
            type: 'postgresql',
            autoFlush: false,
          })
          
          console.log(orm.em) // access EntityManager via `em` property
    }
    catch (e) {
        logs.error(e.message + " " +  e.stack)
    }  
}


start()