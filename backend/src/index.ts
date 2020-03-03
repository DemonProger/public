
import logs from "./thirdparty/logs"
import BackServer from './server'
import { MikroORM, ReflectMetadataProvider } from 'mikro-orm'
import { User } from './models/user'
import schemaInit from './create-schema'


import * as dotenv from "dotenv"
dotenv.config()


const start = async () => {
    try {
        const server = new BackServer()
        server.start(parseInt(process.env.PORT || "3000"))

        await schemaInit()

        const cap = 0
        return

        const orm = await MikroORM.init({
            entities: [User],
            dbName: process.env.DB_NAME || "db name is not setted in .env file",           
            clientUrl: 'postgresql://localhost:54332',
            type: 'postgresql',
            autoFlush: false,
            // metadataProvider: ReflectMetadataProvider
          })
          
        console.log(orm.em) // access EntityManager via `em` property

        orm.em.getRepository<User>('user')    
    }
    catch (e) {
        logs.error(e.message + " " +  e.stack)
    }  
}


start()