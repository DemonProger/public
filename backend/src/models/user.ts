

import { PrimaryKey, Property, Entity, UuidEntity, MikroORM, EntityRepository } from 'mikro-orm'
import { v4 } from 'uuid'
import Orm from '../orm'



@Entity()
export class User implements UuidEntity<User> {

    @PrimaryKey() 
    uuid?: string = v4()

    @Property()
    login!: string

    @Property()
    password!: string 

    @Property()
    city?: string 

    @Property()
    age?: number 

    @Property()
    mail!: string

    public constructor(login: string, password: string, city: string, age: number, mail: string) {
        this.login = login
        this.password = password 
        this.city = city 
        this.age = age 
        this.mail = mail
    }
}


export interface IUserModel {
    isUserRegistered(u: User): Promise<boolean>, 
    registerUser(u: User): Promise<void>,
}


export class UserModel implements IUserModel {

    private repo: EntityRepository<User>
    private orm: MikroORM


    public constructor() {
        this.init()
    }


    public async init() {
        this.orm = await Orm.getOrm()
        this.repo = this.orm.em.getRepository<User>('User') 
    }


    public async isUserRegistered(u: User): Promise<boolean> {
        return false
    }


    public async registerUser(u: User): Promise<void> {
        const user = new User(u.login, u.password, u.city || "", u.age || 0, u.mail)
        await this.repo.persistAndFlush(user)
    }

    
    public static parseUser(data: any): User {
        const requiredProps = [
            "login", 
            "password", 
            "city", 
            "age", 
            "email"
        ]

        for (const prop of requiredProps)
            if (data[prop] === undefined)
                throw Error(`Deserializing User error. ${prop} is missed in ${JSON.stringify(data)}`)

        return <User> data
    }
}


export class UserModelWithoutDb implements IUserModel {
    public async isUserRegistered(u: User): Promise<boolean> {
        console.log(`Test user model: isUserRegistered: ${JSON.stringify(u)}`)
        return false
    }


    public async registerUser(u: User): Promise<void> {
        console.log(`Test user model: register user: ${JSON.stringify(u)}`)
    }
}
