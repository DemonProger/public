import * as React from "react"
import { connect } from 'react-redux'
import { RegistrationState } from './reducer'
import RegistrationWindow, { RegistrationWindowProps, FIELD_IDS, User } from '../templates/authorization/registration-modal'
import actions, { TYPES} from './actions'


export const Registraion = (props: any) => {
  
  const onCloseClick = () => {
    props.onCloseClick()
  }
  
  const user: User={
    
    login: props.login.value,
    email: props.email.value,
    password: props.password.value
  
  }
  const onFieldChanged = async(value: string, fieldId: string) => {

    switch(fieldId){
      case FIELD_IDS.name:  
            props.onChangeUsername(value);
            // console.log(props.login.value.length);
            break;
      case FIELD_IDS.email: 
            props.onChangeEmail(value);
            console.log(props.email);
            break;
      case FIELD_IDS.password: 
            props.onChangePassword(value);
            console.log(props.password);
            break;
    }
    
  }  
  const  onRegisterClick=()=>{
         props.registerUser(user)

  }
  
  const templateProps: RegistrationWindowProps = {

    login: props.login,
    email: props.email,
    password: props.password,
    serverMessage: props.serverMessage,
    onCloseClick,
    onFieldChanged,
    onRegisterClick
  }

  
  // const renderRgistrationWindowIfVisible = () => {
  //   if (props.isVisible) 
  //     return <RegistrationWindow {...templateProps} />
  //   else
  //     return <> </> 
  // }

  // const x = true 

  // if (x == true ) 
  //   console.log("HI")

  // x && console.log("HI")
  // x && RegistrationWindow(...templateProps)


  return (
    <>
      {
        props.isVisible
        &&
        // <RegistrationWindow onCloseClick={onCloseClick} username={props.username} email={props.email}  password={props.password}/>
        <RegistrationWindow {...templateProps} />
        // renderRgistrationWindowIfVisible()
      }
    </>
  )
}


const mapStateToProps = (state: any) => {
  return {
    ...state.registrationReducer
  }
}
 
const mapDispatchToProps = (dispatch: any) => {
  
  return {
    onCloseClick: () => dispatch(actions.closeClickAction()),

    onChangeUsername: (value: string) => dispatch(actions.onChangeUsername(value)),

    onChangeEmail: (value: string) => dispatch(actions.onChangeEmail(value)),

    onChangePassword: (value: string) => dispatch(actions.onChangePassword(value)),
    
    registerUser: (user: User)=> dispatch(actions.registerUser(user))
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Registraion)