
import * as React from "react"
import { ButtonGroup, Button, Image } from 'react-bootstrap'
import Styles from './styles.module.css'
import doubleRightArrow from '../../thirdparty/icons/double-arrow-right.svg'

export const UpperToolbar = () => {

  return (  
    <ButtonGroup className={Styles.Group} >
         <Button variant='light' className={Styles.Button}>Виды</Button> 
         <Image src={doubleRightArrow} />      
         <Button variant='light' className={Styles.Button}>Экскурсии</Button> 
         <Image src={doubleRightArrow} />      
         <Button variant='light' className={Styles.Button}>Пешие</Button> 
         <Image src={doubleRightArrow} />      
         <Button variant='light' className={Styles.Button}>Клиент1</Button> 
    </ButtonGroup>
  )
}
export default UpperToolbar