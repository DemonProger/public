


import { Reducer } from 'redux'


export type RegistrationState = {
    isVisible?: boolean,
}


const initialState : RegistrationState = {
    isVisible: false,    
}


export const reducer: Reducer<any> = (state: RegistrationState = initialState, action: any) => {
    return state
}


export default reducer
