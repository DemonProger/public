

 
import * as React from "react"
import { Button, ButtonToolbar } from 'react-bootstrap'

import Styles from './styles.module.css'

export const Floattoolbar = () => {
  return (
    <ButtonToolbar className={Styles.ToolbarWrapper}>
      <Button variant="success" className={Styles.ToolbarButton}>
        Text
      </Button>
    </ButtonToolbar>
  )
}

export default Floattoolbar