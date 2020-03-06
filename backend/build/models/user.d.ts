import { UuidEntity } from 'mikro-orm';
export declare class User implements UuidEntity<User> {
    uuid: string;
    login: string;
    password: string;
    city?: string;
    age?: number;
    mail: string;
    constructor(login: string, password: string, city: string, age: number, mail: string);
}
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
