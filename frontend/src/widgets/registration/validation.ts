

class FormValidation{

    isUsernameValid(value: string): Promise<[boolean, string]>{

        let usernameValue= value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        return Promise.resolve(usernameValue ? [true, ''] :  [false, 'Unacceptable symbols']);

    }
    
    isEmailValid(value: string): Promise<[boolean, string]>{

        let emailValue=value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        return Promise.resolve(emailValue ? [true, ''] :  [false, 'Unacceptable symbols']);
    }
    
    isPasswordValid(value: string): Promise<[boolean, string]>{

        return Promise.resolve(value.length >= 8 ? [true, '']: [false, 'short password, at least 8 symbols']);

    }
    

}
export default new FormValidation();
