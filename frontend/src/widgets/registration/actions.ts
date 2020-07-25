import { User } from "../templates/authorization/registration-modal";
import RegistrationApi from "./api";
import { FIELD_IDS } from './../templates/authorization/registration-modal';
import FormValidation from "./validation";

export const TYPES = {

    TYPE_CLOSE_CLICK: "close-clicked",
    TYPE_ONCHANGE_FIELD_USERNAME: "change-user-field",
    TYPE_ONCHANGE_FIELD_EMAIL: "change-email-field",
    TYPE_ONCHANGE_FIELD_PASSWORD: "change-password-field",
    TYPE_ONREGISTERED_USER: "registered-user",
    TYPE_ONRESERVEDLOGIN: "reserved-login"
}


export const closeClickAction = () => {
    return {
        type: TYPES.TYPE_CLOSE_CLICK
    }
}

//Action Creator
export const onChangeUsername = (value: string) => {

    let [flag, validationmessage]= FormValidation.isUsernameValid(value)
    return {
        type: TYPES.TYPE_ONCHANGE_FIELD_USERNAME,
        login: {value: value,  isValid: flag, validationInfo: validationmessage}
    }
}

export const onChangeEmail = (value: string) => {

    let [flag, validationmessage]= FormValidation.isEmailValid(value)

    return {
        type: TYPES.TYPE_ONCHANGE_FIELD_EMAIL,
        email: {value: value,  isValid: flag, validationInfo: validationmessage}
    }
}

export const onChangePassword = (value: string) => {

     let [flag, validationmessage]= FormValidation.isPasswordValid(value)

    return {
        type: TYPES.TYPE_ONCHANGE_FIELD_PASSWORD,
        password: {value: value,  isValid: flag, validationInfo: validationmessage}
    }
}

const onRegesteredUser = () => {

    return {
        type: TYPES.TYPE_ONREGISTERED_USER,
        serverMessage: "User successfully added"

    }
}
const onReservedLogin = () => {
    return {
        type: TYPES.TYPE_ONRESERVEDLOGIN,
        serverMessage: "Login is already reserved"
    }
}

export const registerUser = (user: User) => async (dispatch: any) => {
    // RegistrationApi.sendDataUser(user).then((resp: Response) => {
    //     switch(resp.status){
    //         case 200: return dispatch(onRegesteredUser()) 
    //         case 406: return dispatch(onReservedLogin())
    //     }
    // })

    const resp = await RegistrationApi.sendDataUser(user)
    switch (resp.status) {

        case 200: return dispatch(onRegesteredUser())
        case 409: return dispatch(onReservedLogin())
    }

    // // dispatch(onUserRegestered())
    // dispatch(onLoginBuisy())
    // dispatch(error())    
    //201-created пользователь,        
}

//может быть занят либо сам логин, либо сам email,
export default {
    onChangeEmail,
    onChangePassword,
    onChangeUsername,
    closeClickAction,
    registerUser
} 
