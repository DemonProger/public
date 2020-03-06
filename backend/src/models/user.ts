

import { PrimaryKey, Property, Entity, UuidEntity } from 'mikro-orm'
import { v4 } from 'uuid'

@Entity()
export class User implements UuidEntity<User> {

    @PrimaryKey() 
    uuid: string = v4()

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


export class UserModel {

    public constructor() {

    }


    public async isUserRegistered(u: User): Promise<boolean> {
        return false
    }


    public async registerUser(u: User): Promise<void> {

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
