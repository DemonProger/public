export declare type User = {
    login: string;
    password: string;
    city: string;
    age: number;
    email: string;
};
export interface IUserModel {
    isUserRegistered(u: User): Promise<boolean>;
    registerUser(u: User): Promise<void>;
}
export declare class UserModel {
    constructor();
    isUserRegistered(u: User): Promise<boolean>;
    registerUser(u: User): Promise<void>;
    static parseUser(data: any): User;
}
export default UserModel;
