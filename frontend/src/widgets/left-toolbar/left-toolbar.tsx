
 
import * as React from "react"
import { ButtonGroup, Button } from 'react-bootstrap'
import Styles from './styles.module.css'


export const Toolbar = () => {
  return (  
    <ButtonGroup vertical className={Styles.Group}>
        <Button variant="outline-dark" className={Styles.Button}>Новый паблик</Button>
        <Button variant="outline-dark" className={Styles.Button}>item2</Button>
        <Button variant="outline-dark" className={Styles.Button}>item 1</Button>      
        <Button variant="outline-dark" className={Styles.Button}>item 1</Button>
    </ButtonGroup>
  )
}

export default Toolbar