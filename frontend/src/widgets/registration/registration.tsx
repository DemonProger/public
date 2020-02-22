


 
import * as React from "react"
import { connect } from 'react-redux'
import { RegistrationState } from './reducer'
import { Alert } from 'react-bootstrap'


export const Registraion = (props: RegistrationState) => {
    return (
        <>
        {
            props.isVisible
            &&
            <Alert variant="danger" >hi! I am modal"</Alert>
        }         
        </>   
    )
}


const mapStateToProps = (state: any) => {  
  return { 
      ...state.registration     
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
     
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registraion)