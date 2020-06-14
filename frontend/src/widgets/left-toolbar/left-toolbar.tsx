
 
import * as React from "react"
import { ButtonGroup, Button } from 'react-bootstrap'
import Styles from './styles.module.css'


export const Toolbar = () => {
  return (  
    <ButtonGroup vertical className={Styles.Group}>
        <Button variant="light" className={Styles.Button} >Новый паблик</Button>
        <Button variant="light" className={Styles.Button} >Места</Button>
        <Button variant="light" className={Styles.Button} >События</Button>      
        <Button variant="light" className={Styles.Button} >Группы</Button>
    </ButtonGroup>
  )
}

export default Toolbar