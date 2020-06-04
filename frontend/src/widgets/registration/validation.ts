

class FormValidation {

    public isUsernameValid(value: string): [boolean, string] {

        const isFormatValid = this.isUsernameFormatValid(value)
        const isTextWithSpecial = this.isTextWithSpecial(value)
        const isTooLong = this.isTooLong(value, 12)
        const isTooShort = this.isTooShort(value, 1)
        const isEmpty = this.isEmpty(value)

        if (!isFormatValid)
            return [false, "Неверный формат или не допустимый символ"]

        if (!isTextWithSpecial)
            return [false, "Недопустимый символ"]

        if (!isTooLong)
            return [false, "Слишком длинный, не более 12 символов"]

        if (!isTooShort)
            return [false, "Слишком короткий, не менее 1 символа"]

        if (!isEmpty)
            return [false, "Поле не заполнено"]

        return [true, ""]
        

        // let usernameValue = value.match(/^[а-яА-ЯёЁa-zA-Z0-9]{1,20}$/i);
        // console.log(usernameValue);
        // return usernameValue ? [true, ''] : [false, 'Unacceptable symbols'];
    }

    public isEmailValid(value: string): [boolean, string] {

        const isFormatValid = this.isEmailFormatValid(value)
        const isTextWithSpecial = this.isTextWithSpecial(value)
        const isEmpty = this.isEmpty(value)

        if (!isFormatValid)
            return [false, "Неверный формат или не допустимый символ"]

        if (!isTextWithSpecial)
            return [false, "Недопустимый символ"]

        if (!isEmpty)
            return [false, "Поле не заполнено"]

        return [true, ""]

        // let emailValue = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,5})$/i);
        // console.log(emailValue);
        // return emailValue ? [true, ''] : [false, 'Unacceptable symbols'];
    }

    public isPasswordValid(value: string): [boolean, string] {

        const isFormatValid = this.isPasswordFormatValid(value)
        const isTooLong = this.isTooLong(value, 8)
        const isTooShort = this.isTooShort(value, 8)
        const isTextWithSpecial = this.isTextWithSpecial(value)
        const isEmpty = this.isEmpty(value)

        if (!isFormatValid)
            return [false, "Неверный формат или не допустимый символ"]

        if (!isTooLong)
            return [false, "Слишком длинный, не более 8 символов"]

        if (!isTooShort)
            return [false, "Слишком короткий, не менее 8 символов"]

        if (!isTextWithSpecial)
            return [false, "Недопустимый символ"]

        if (!isEmpty)
            return [false, "Поле не заполнено"]

        return [true, ""]

        // let passwordValid=value.match(/(?=.*[a-z])|(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}$/)
        
    }

    private isUsernameFormatValid(value: string): boolean {
        return value.match(/([а-яА-ЯёЁa-zA-Z0-9])$/i) !== null ? true : false
    }

    private isEmailFormatValid(value: string): boolean {

        return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,5})$/i) !== null ? true : false
    }

    private isPasswordFormatValid(value: string): boolean { 

        return value.match(/(?=.*[a-z])|(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s])$/) !== null ? true : false
    }

    private isTextWithSpecial(value: string): boolean {

        return value.match(/([/;|`|{|}|"|'|\(|\)/|#№%!?&*])$/) === null ? true : false
    }

    private isTooLong(value: string, limit: number): boolean {

        return value.length > limit ? false : true
    }

    private isTooShort(value: string, limit: number): boolean {

        return value.length < limit ? false : true
    }

    private isEmpty(value: string): boolean {
        return value.length !== 0 ? true : false
    }
}
export default new FormValidation();
//TODO: сообщение о проверке полей ввода на длину
//TODO: проверка регистрации пользователя и переход на страницу личного кабинета пользователя(Route)
//TODO: сделать тесты(test.jest)
//TODO: прочитать про ООП в javascript