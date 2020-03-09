
import { MikroORM } from 'mikro-orm'
import { User } from './models/user'


class Orm {

  private orm: MikroORM | null = null

  public async getOrm(): Promise<MikroORM> {
    if (this.orm == null)
      this.orm = await this.createOrm()

    if (this.orm === null)
      throw Error(`Orm is not created yet`)

    return this.orm
  }

  private async createOrm(): Promise<any> {
    const orm = await MikroORM.init({
      entities: [User],
      dbName: process.env.DB_NAME || "db name is not setted in .env file", 
      password: process.env.DB_PASSWORD || "password is not setted in .env file",           
      type: 'postgresql', 
      host: process.env.DB_HOST || "localhost", 
      port: parseInt("" + process.env.DB_PORT) || 5432,  
      user: process.env.DB_USER || "postgres"
    })
  
    const generator = orm.getSchemaGenerator()
  
    const dropDump = await generator.getDropSchemaSQL()
    console.log(dropDump)
  
    const createDump = await generator.getCreateSchemaSQL()
    console.log(createDump)
  
    const updateDump = await generator.getUpdateSchemaSQL()
    console.log(updateDump)
  
    const dropAndCreateDump = await generator.generate()
    console.log(dropAndCreateDump)
    
    await generator.updateSchema()
  
    return orm 
  }
}

export default new Orm()


 