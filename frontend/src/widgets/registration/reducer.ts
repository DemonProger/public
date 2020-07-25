// import { reducer } from './../publics/reducer';
// import {reducer} from './../header/reducer';
// import  {reducer}  from './../publics/reducer';
import { Reducer } from 'redux'
import actions, { TYPES } from './actions'
import { TYPE } from '../header/actions-header'
import { FIELD_IDS } from './../templates/authorization/registration-modal';


export type FieldState = {
    value: string, 
    isValid: boolean, 
    validationInfo: string | null
}

export type RegistrationState = {

    isVisible?: boolean,
    login: FieldState,
    email: FieldState,
    password: FieldState,
    serverMessage: string
}

export const initialState: RegistrationState = {
    isVisible: false,
    login: {value: '', isValid: true, validationInfo: ''},
    email: {value: '', isValid: true, validationInfo: ''},
    password: {value: '', isValid: true, validationInfo: ''},
    serverMessage: ''
    
}

export const reducer: Reducer<any> = (state: RegistrationState = initialState, action: any) => {   
    switch (action.type) {

        case TYPES.TYPE_CLOSE_CLICK: 
            return {
                login: '',
                email: '',
                password: '',
                isVisible: false,
                isValid: true
            }


        case TYPE.TYPE_CLICK_ENTRANCE: 
            return {
                ...state,
                isVisible: true
            }
        
        case TYPES.TYPE_ONCHANGE_FIELD_USERNAME:
            return {
                ...state,
                login: action.login
            }


        case TYPES.TYPE_ONCHANGE_FIELD_EMAIL: 
            return {
                ...state,
                email: action.email
               
            }
        
        case TYPES.TYPE_ONCHANGE_FIELD_PASSWORD: 
            return {

                ...state,
                password: action.password
            }

        case TYPES.TYPE_ONREGISTERED_USER: 

            return {
                ...state,
                serverMessage: action.serverMessage
               
            }

        case TYPES.TYPE_ONRESERVEDLOGIN: return {
                ...state,
                serverMessage: action.serverMessage
            }
        
        default:
            return state
    }   
    
}
export default reducer