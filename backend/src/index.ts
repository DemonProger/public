
import logs from "./thirdparty/logs"
import BackServer from './server'
import Orm from './orm'
import {User } from './models/user'
import { MikroORM } from 'mikro-orm'


import * as dotenv from "dotenv"
dotenv.config()


const start = async () => {
    try {
        const server = new BackServer()
        server.start(parseInt(process.env.PORT || "3000"))
    }
    catch (e) {
        logs.error(e.message + " " +  e.stack)
    }  
}


start()