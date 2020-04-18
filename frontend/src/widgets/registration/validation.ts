

export class RegistrationValidation {
    public validatePassword(value: string): [boolean, string] {
        if (value.length > 30) 
            return [false, "Too long value"]

        if (value.length < 2) 
            return [false, "Too short value"]

        return [true, ""]
    }


    public validateLogin(value: string): [boolean, string] {

    }
}


// .... 


const validator = new RegistrationValidation()

const [isValid, errorInfo] = validator.validateLogin("some login")
if (isValid) 
    console.logs("success")