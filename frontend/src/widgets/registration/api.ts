import { User } from '../templates/authorization/registration-modal'
import { FIELD_IDS } from './../templates/authorization/registration-modal'


class RegistrationApi {
    async sendDataUser(userObject: User): Promise<Response> {

        let response = await fetch('http://localhost:8080/registration/register' , {
            mode: 'cors',
            method: 'post',
            headers: {
                'Content-Type': "application/json"

            },
            // body: JSON.stringify(userObject)
            body: JSON.stringify(userObject)
            
            // body: userObject.
           

        });

        return response;
    }
    
}
// "http://localhost:3000"
// /user
// process.env.BACK_URL ||
export default new RegistrationApi(); 