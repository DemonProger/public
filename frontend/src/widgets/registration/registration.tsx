import * as React from "react"
import { connect } from 'react-redux'
import { RegistrationState } from './reducer'
import RegistrationWindow, { RegistrationWindowProps, FIELD_IDS } from '../templates/authorization/registration-modal'
import actions, { TYPES} from './actions'


export const Registraion = (props: any) => {

  const onCloseClick = () => {
    props.onCloseClick()
  }

  const onFieldChanged = (value: string, fieldId: string) => {
    switch(fieldId){
      case FIELD_IDS.name:  
            props.onChangeUsername(value);
            break;
      case FIELD_IDS.email: 
            props.onChangeEmail(value);
            break; 
      case FIELD_IDS.password: 
            props.onChangePassword(value);
            break;
    }
    

      
  }
  const templateProps: RegistrationWindowProps = {
    username: props.username,
    email: props.email,
    password: props.password,
    onCloseClick,
    onFieldChanged
  }

  return (
    <>
      {
        props.isVisible
        &&
        // <RegistrationWindow onCloseClick={onCloseClick} username={props.username} email={props.email}  password={props.password}/>
        <RegistrationWindow {...templateProps} />
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
    onCloseClick: () => dispatch(actions.closeClickAction),
    
    onChangeUsername: (value: string) => dispatch(actions.onChangeUsername),

    onChangeEmail: (value: string) => dispatch(actions.onChangeEmail),

    onChangePassword: (value: string) => dispatch(actions.onChangePassword)
    

  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Registraion)
