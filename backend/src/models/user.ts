

class Queries {
    public static addUser(u: User): string {
        return ""
    }
}


export type User = {
    login: string, 
    password: string, 
    city: string, 
    age: number, 
    email: string 
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


export default UserModel