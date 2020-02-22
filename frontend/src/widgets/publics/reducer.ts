

import { Reducer } from 'redux'


export type Public = {
    name: string
    description: string
}


export type PublicsStore = {
    publics: Public[]
}


const defaultStore : PublicsStore = {
    publics: []
}


export const reducer: Reducer<any> = (state: PublicsStore = defaultStore, action: any) => {
    return state
}


export default reducer