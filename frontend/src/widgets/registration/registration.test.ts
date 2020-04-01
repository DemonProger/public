
import ReactDom from 'react-dom'
import { initialState } from './reducer'
import { Registraion } from './registration'
import sendDataUser from './api'
import { User} from '../templates/authorization/registration-modal' 


describe("Api test", () => {
    const testUser = <User> {
        username: "Ritka", 
        email: "mail there", 
        password: "Marsik123"
    }

    test("User adding ", async () => {
        await sendDataUser(testUser)
    })
})


test("registration states variants testing...", () => {

    const div = document.createElement('div')   

    const testedStates = [
        initialState, 
        {
            ...initialState, 
            isVsible: true
        }
    ]
    
    for (const state of testedStates) 
        ReactDom.render(Registraion(state), div)
})