 

import * as React from "react"
import { Card, Col } from 'react-bootstrap'
import Styles from './styles.module.css'


export type PublicCartProps = {
  title: string, 
  text: string, 
  key: number
}


export const PublicCard = (props: PublicCartProps) => {
  return (
    <Col xs={12} sm={4}>
      <Card className={Styles.Card}>
        <Card.Body className={Styles.CardBody}>
          <Card.Title className={Styles.CardTitle}>{props.title}</Card.Title>
          <Card.Text className={Styles.CardText}>{props.text}</Card.Text>
        </Card.Body>  
      </Card>
    </Col>
  )
}

export default PublicCard



