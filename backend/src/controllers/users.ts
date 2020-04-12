
import logs from "../thirdparty/logs"
import { IUserModel, User, UserModel } from '../models/user'

class UsersController {

    private model: IUserModel

    public constructor(model: IUserModel) {
        this.model = model        
    }

    public async registerUser(req: any, resp: any): Promise<void> {
        try {
            logs.info(`registerUser: ${JSON.stringify(req.body)}`)
            const body = req.body
            const user: User = UserModel.parseUser(body)
            if (await this.model.isUserRegistered(user)) {
                resp.status(200).end("User successfully added")

            }
            // this.model.registerUser(user)
            // resp.status(200).end("User added")
        }
        catch (e) {
            this.handleException(e, resp)
        }
    }


    private handleException(exception: any, resp: any) {
        resp.status(500).end(exception.stack)
        logs.error(exception.stack)
    }
}


export default UsersController
