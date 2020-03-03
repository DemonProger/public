
import { MikroORM } from 'mikro-orm'
import { User } from './models/user'


export default async () => {
  const orm = await MikroORM.init({
    entities: [User],
    dbName: process.env.DB_NAME || "db name is not setted in .env file",           
    clientUrl: 'postgresql://localhost:5432',
    type: 'postgresql'    
  })

  const generator = orm.getSchemaGenerator()

  const dropDump = await generator.getDropSchemaSQL()
  console.log(dropDump)

  const createDump = await generator.getCreateSchemaSQL()
  console.log(createDump)

  const updateDump = await generator.getUpdateSchemaSQL()
  console.log(updateDump)

  // there is also `generate()` method that returns drop + create queries
  const dropAndCreateDump = await generator.generate()
  console.log(dropAndCreateDump)

  // or you can run those queries directly, but be sure to check them first!
  await generator.dropSchema()
  await generator.createSchema()
  await generator.updateSchema()

  await orm.close(true)
}