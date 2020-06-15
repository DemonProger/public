// import { initialState } from './../registration/reducer';
// import { reducer } from './../publics/reducer';
import { Reducer } from 'redux'
import { TYPE } from './actions-header'
import { ReducerWithoutAction } from 'react'


export type UsersProfileState = {

    users: any[]
}

export const initialState: UsersProfileState = {

    users: []
}

export const reducer: Reducer<any> = (state: UsersProfileState = initialState, action: any) => {
    switch (action.type) {

        case TYPE.TYPE_GET_DATA_USERS:
            return {
                users: action.users
            }
        default:
            return state

    }
}

export default reducer