
import logs from "../thirdparty/logs"
import { UserModel, User } from '../models/user'


class AuthController {

    private model: UserModel


    public constructor(model: UserModel) {
        this.model = model
    }


    public async registerUser(req: any, resp: any) {
        try {
            const body = req.body
            const user: User = UserModel.parseUser(body)
            if (this.model.isUserRegistered(user)) {
                resp.status(406).end("User is registered")
            }
            this.model.registerUser(user)
            resp.status(200).end("User added")
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


export default AuthController