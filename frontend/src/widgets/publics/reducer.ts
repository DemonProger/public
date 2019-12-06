

import { Reducer } from 'redux'


interface IPublic {
    name: string
    description: string
}


interface IPublicsStore {
    publics: IPublic[]
}


const defaultStore : IPublicsStore = {
    publics: []
}


export const reducer: Reducer<any> = (state: IPublicsStore = defaultStore, action: any) => {
    return state
}


export default reducer