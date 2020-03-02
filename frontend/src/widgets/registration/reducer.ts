

import { Reducer } from 'redux'
import {TYPES} from './actions'
import {TYPE} from '../header/actions-header'

export type RegistrationState = {
    isVisible?: boolean,
    username: string,
    email: string,
    password: string
}

export const initialState : RegistrationState = {
    isVisible: false, 
    username: '',
    email: '',
    password: ''   
}



export const reducer: Reducer<any> = (state: RegistrationState = initialState, action: any) => {
    
    if (action.type === TYPES.TYPE_CLOSE_CLICK) {        
        return {
            ...state, 
            isVisible: false
        }
    }else if (action.type===TYPE.TYPE_CLICK_ENTRANCE) {
        return {
            ...state, 
            isVisible: true
        }

    }

     
    
    return state
}


export default reducer
