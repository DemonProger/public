import * as React from "react"
import { connect } from 'react-redux'
import { RegistrationState } from './reducer'
import RegistrationWindow, { RegistrationWindowProps } from '../templates/authorization/registration-modal'
import registrationActions, { TYPES } from './actions'

export const Registraion = (props: any) => {

    const onCloseClick = () => {
      props.onCloseClick()
    }

    const templateProps: RegistrationWindowProps = {
      onCloseClick: onCloseClick, 
      username: props.username, 
      email: props.email, 
      password: props.password
    }

    return (
        <>
        {
            props.isVisible
            &&
            // <RegistrationWindow onCloseClick={onCloseClick} username={props.username} email={props.email}  password={props.password}/>
            <RegistrationWindow {...templateProps}/>
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
    onCloseClick: () => { 
      // dispatch(registrationActions.closeClickAction()) 
      dispatch({ 
        type: TYPES.TYPE_CLOSE_CLICK
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registraion)
