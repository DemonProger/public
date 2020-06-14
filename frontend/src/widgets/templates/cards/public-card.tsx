

import * as React from "react"
import { Card, Col, CardDeck } from 'react-bootstrap'
import Styles from './styles.module.css'


export type PublicCartProps = {

  users: any[],
  getUsersProfiles(): void
}

export const PublicCard = (props: PublicCartProps) => {

  const setUsersData = () => {
    props.getUsersProfiles()
  }

  setUsersData()

  return (
    <CardDeck className={Styles.CardWrapper}>

    {props.users.map((cardEl) =>
      <Col xs={12} sm={4}>
        <Card className={Styles.Card}>
          <Card.Body className={Styles.CardBody}>
            <Card.Img variant='top' src='#'></Card.Img>
            <Card.Title className={Styles.CardTitle}></Card.Title>
            <Card.Text className={Styles.CardText}>{cardEl.login}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      )}

  </CardDeck>
  )
}

export default PublicCard