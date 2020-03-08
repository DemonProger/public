
import { Reducer } from 'redux'
import actions, { TYPES } from './actions'
import { TYPE } from '../header/actions-header'
import { FIELD_IDS } from './../templates/authorization/registration-modal';

export type RegistrationState = {
    isVisible?: boolean,
    username: string,
    email: string,
    password: string
}

export const initialState: RegistrationState = {
    isVisible: false,
    username: '',
    email: '',
    password: ''
}



export const reducer: Reducer<any> = (state: RegistrationState = initialState, action: any) => {
    switch (action.type) {
        case TYPES.TYPE_CLOSE_CLICK: return {
            ...state,
            isVisible: false
        }
        case TYPE.TYPE_CLICK_ENTRANCE: return {
            ...state,
            isVisible: true
        }
        case TYPES.TYPE_ONCHANGE_FIELD_USERNAME: return {

            ...state,
            username: action.value
        }
        case TYPES.TYPE_ONCHANGE_FIELD_EMAIL: return{
            ...state,
            email: action.value
        }
        case TYPES.TYPE_ONCHANGE_FIELD_PASSWORD: return{
            ...state,
            password: action.value
        }
        default:
            return state
    }   
    
}
export default reducer
