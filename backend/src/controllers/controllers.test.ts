
import { User, UserModelWithoutDb } from '../models/user'
import UsersController from './users'


const makeReqWithBody = (body: any) => {
    return {
        body
    }
}

const makeResp = () => {
    return {
        status: (code: number) => {
            return {
                end: (msg: string) => {
                    console.log(`resp.status(${code}).end(${msg})`)
                }, 

                send: (msg: string) => {
                    console.log(`resp.status(${code}).send(${msg})`)
                }
            }
        }
    }
}


describe("Users controller test", () => {

    const users = [
        <User>{
            login: "user-login",
            password: "user-password",
            city: "user-city",
            age: 22,
            mail: "user-email"
        }
    ]

    const controller = new UsersController(new UserModelWithoutDb())

    test("User adding", () => {
        for (const u of users)
            controller.registerUser(makeReqWithBody(u), makeResp())
    })
})