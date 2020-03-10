import { User} from '../templates/authorization/registration-modal' 


const  sendDataUser= async (userObject: User)=>{

    let response = await fetch('/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(userObject)

    } ); 
    return response;

}

export default sendDataUser
