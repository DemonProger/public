import { User} from '../templates/authorization/registration-modal' 

class RegistrationApi{
    async sendDataUser(userObject: User): Promise<Response> {

        let response = await fetch(`${process.env.BACK_URL || "http://localhost:3000"}/user`, {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'http://localhost:3000'
    
            },
            body: JSON.stringify(userObject)
    
        } ); 

        return response;    
    }
}


export default new RegistrationApi();
