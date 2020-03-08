import { FIELD_IDS } from './../templates/authorization/registration-modal';

export const TYPES = {
    TYPE_CLOSE_CLICK: "close-clicked",
    TYPE_ONCHANGE_FIELD_USERNAME: "change-user-field",
    TYPE_ONCHANGE_FIELD_EMAIL: "change-email-field",
    TYPE_ONCHANGE_FIELD_PASSWORD:  "change-password-field"     
}


export const closeClickAction = () => {
    return {
        type: TYPES.TYPE_CLOSE_CLICK
    }
}

//Action Creator
export const createChangeUsername=(value: string)=>{
    return{
        type: TYPES.TYPE_ONCHANGE_FIELD_USERNAME,
        username: value,
    }
}

export const createChangeEmail=(value: string)=>{
    return{
        type: TYPES.TYPE_ONCHANGE_FIELD_EMAIL,
        email: value
    }
}

export const createChangePassword=(value: string)=>{
    return{
        type: TYPES.TYPE_ONCHANGE_FIELD_PASSWORD,
        password: value
    }
}
export default {
    closeClickAction,
    createChangeUsername,
    createChangeEmail,
    createChangePassword
}