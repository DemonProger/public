
import * as React from "react"
import { Card, Col, CardDeck } from 'react-bootstrap'
import Styles from './styles.module.css'


export type PublicCartProps = {

  users: any[]
  
}

export const PublicCard = (props: PublicCartProps) => {
  
   /*const setUsersData = () => {
    props.getUsersProfiles()
  }*/
  //setUsersData()

  //  props.getUsersProfiles();
  return (

    <CardDeck className={Styles.CardWrapper} >

      {props.users.map((cardEl, key) =>
        <Col xs={12} sm={4}>
          <Card className={Styles.Card} key={key}>
            <Card.Body className={Styles.CardBody}>
              <Card.Img variant='top' src='#'></Card.Img>
              <Card.Title className={Styles.CardTitle}>{cardEl.password}</Card.Title>
              <Card.Text className={Styles.CardText}>{cardEl.login}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )}

    </CardDeck>
  )
}

export default PublicCard