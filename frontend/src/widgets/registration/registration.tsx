import * as React from "react"
import { connect } from 'react-redux'
import { RegistrationState } from './reducer'
import RegistrationWindow, { RegistrationWindowProps, FIELD_IDS } from '../templates/authorization/registration-modal'
import { createChangeUsername, createChangeEmail, createChangePassword, TYPES } from './actions'


export const Registraion = (props: any) => {

  const onCloseClick = () => {
    props.onCloseClick()
  }

  const createChangeHandler = (value: string, fieldId: string) => {

    if (FIELD_IDS.name === fieldId) {

      props.createChangeUsername(value)

    } else if (FIELD_IDS.email === fieldId) {

      props.createChangeEmail(value)

    } else if (FIELD_IDS.password === fieldId) {

      props.createChangePassword(value)
    }
  }
  const templateProps: RegistrationWindowProps = {
    username: props.username,
    email: props.email,
    password: props.password,
    onCloseClick: onCloseClick,
    createChangeHandler: createChangeHandler
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
    onCloseClick: () => {
      // dispatch(registrationActions.closeClickAction()) 
      dispatch({
        type: TYPES.TYPE_CLOSE_CLICK
      })

    },
    createChangeUsername: (value: string) => {

      dispatch({
        type: TYPES.TYPE_ONCHANGE_FIELD_USERNAME,
        username: value
      })
    },
    createChangeEmail: (value: string) => {
      dispatch({
        type: TYPES.TYPE_ONCHANGE_FIELD_EMAIL,
        email: value

      })
    },
    createChangePassword: (value: string) => [
      dispatch({
        type: TYPES.TYPE_ONCHANGE_FIELD_PASSWORD,
        password: value
      })
    ]

  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Registraion)
