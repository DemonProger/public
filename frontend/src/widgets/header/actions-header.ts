
import UsersProfiles from './usersdata'

export const TYPE={
    TYPE_CLICK_ENTRANCE: "clicked-entrance",
    TYPE_GET_DATA_USERS: "data-users"
}


export const onEntranceClick=()=>{
    return {
        type: TYPE.TYPE_CLICK_ENTRANCE
    }
    

}

export const setserverUsers=(resp: JSON)=>{
    
    return{
        type: TYPE.TYPE_GET_DATA_USERS,
        users: resp
    }
}

export  const getDataUsers=()=> async(dispatch: any)=>{
    
    const resp = await UsersProfiles.getUsers();
     
    return dispatch(setserverUsers(resp))

}

export default {
    onEntranceClick,
    getDataUsers
} 