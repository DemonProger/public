
import logs from "../thirdparty/logs"
import { IUserModel, User, UserModel } from '../models/user'


class UsersController {

    private model: IUserModel


    public constructor(model: IUserModel) {
        this.model = model        
    }


    public async registerUser(req: any, resp: any) {
        try {
            const body = req.body
            const user: User = UserModel.parseUser(body)
            if (this.model.isUserRegistered(user)) {
                resp.status(406).end("Login is already reserved")
                return
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


export default UsersController