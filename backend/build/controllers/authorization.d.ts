import UserModel from '../models/user';
declare class AuthController {
    private model;
    constructor(model: UserModel);
    registerUser(req: any, resp: any): Promise<void>;
    private handleException;
}
export default AuthController;
