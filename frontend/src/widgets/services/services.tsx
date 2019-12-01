

 
import * as React from "react"
import { CardDeck, Card, Col } from 'react-bootstrap'
import Styles from '../cards/styles.module.css'

export const CardsBox = () => {

  let items : any [] = []
  for (let i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    items.push((
    <Col xs={12} sm={4} key={i}>
      <Card className={Styles.Card}>
        <Card.Body className={Styles.CardBody}>
          <Card.Title className={Styles.CardTitle}>Some title</Card.Title>
          <Card.Text className={Styles.CardText}>Some text with letters</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    ))

  return (
    <CardDeck className={Styles.CardWrapper}>
      {
        items
      }
    </CardDeck>
  )
}

export default CardsBox