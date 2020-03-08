

export const TYPES = {
    TYPE_CLOSE_CLICK: "close-clicked",
    TYPE_ONCHANGE_FIELD_USERNAME: "change-user-field",
    TYPE_ONCHANGE_FIELD_EMAIL: "change-email-field",
    TYPE_ONCHANGE_FIELD_PASSWORD: "change-password-field"
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
    


export default {
    onChangeEmail,
    onChangePassword,
    onChangeUsername,
    closeClickAction
}
