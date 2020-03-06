
import logs from "./thirdparty/logs"
import BackServer from './server'
import { MikroORM, ReflectMetadataProvider } from 'mikro-orm'
import { User } from './models/user'
import Orm from './orm'


import * as dotenv from "dotenv"
dotenv.config()


const start = async () => {
    try {
        const server = new BackServer()
        server.start(parseInt(process.env.PORT || "3000"))

        const orm = Orm.getOrm()              
        // console.log(orm.em) // access EntityManager via `em` property

        // const usersRepo = orm.em.getRepository<User>('User') 
        // const user = new User("login", "pass", "city", 22, "mail")

        // await usersRepo.persistAndFlush(user)
    }
    catch (e) {
        logs.error(e.message + " " +  e.stack)
    }  
}


start()