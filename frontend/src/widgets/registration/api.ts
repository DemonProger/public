import { User} from '../templates/authorization/registration-modal' 

class RegistrationApi{
    async sendDataUser(userObject: User): Promise<Response> {

        let response = await fetch(`${process.env.BACK_URL || "http://localhost:80"}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
    
            },
            body: JSON.stringify(userObject)
    
        } ); 

        return response;    
    }
}


export default new RegistrationApi();
