import { User } from "../templates/authorization/registration-modal"
import sendDataUser from "./api"


export const TYPES = {
    TYPE_CLOSE_CLICK: "close-clicked",
    TYPE_ONCHANGE_FIELD_USERNAME: "change-user-field",
    TYPE_ONCHANGE_FIELD_EMAIL: "change-email-field",
    TYPE_ONCHANGE_FIELD_PASSWORD: "change-password-field",
    TYPE_ONREGISTERED_USER: "registered-user"
}


export const closeClickAction = () => {
    return {
        type: TYPES.TYPE_CLOSE_CLICK
    }
}

//Action Creator
export const onChangeUsername=(value: string) => {
        return {
            type: TYPES.TYPE_ONCHANGE_FIELD_USERNAME,
            username: value,
        }
}

export  const onChangeEmail=(value: string) => {
        return {
            type: TYPES.TYPE_ONCHANGE_FIELD_EMAIL,
            email: value
        }
    }


export const onChangePassword = (value: string) => {
        return {
            type: TYPES.TYPE_ONCHANGE_FIELD_PASSWORD,
            password: value
        }
    }
const onRegesteredUser=()=>{
    return{
        type: TYPES.TYPE_ONREGISTERED_USER
    }
}


export const registerUser =async (user: User) => {
    return  async (dispatch: any) => {
        // request 
        let result = await sendDataUser(user);

        switch(result.status){
            case 201: return dispatch(onRegesteredUser);

        }
        // dispatch(onUserRegestered())
        // dispatch(onLoginBuisy())
        // dispatch(error())
        //201-created пользователь, 
    }   
}
//может быть занят либо сам логин, либо сам email,
export default {
    onChangeEmail,
    onChangePassword,
    onChangeUsername,
    closeClickAction, 
    registerUser
}