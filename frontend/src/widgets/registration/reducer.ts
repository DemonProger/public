


import { Reducer } from 'redux'


export type AuthorizationState = {
    isVisible: boolean,

}


const initialState : AuthorizationState = {
    isVisible: false,
    
}


export const reducer: Reducer<any> = (state: AuthorizationState = initialState, action: any) => {
    return state
}


export default reducer
