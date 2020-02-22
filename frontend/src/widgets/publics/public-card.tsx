 

import * as React from "react"
import { Card, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import Styles from './styles.module.css'


export const PublicCard = () => {
  return (
    <Col xs={12} sm={4}>
      <Card className={Styles.Card}>
        <Card.Body className={Styles.CardBody}>
          <Card.Title className={Styles.CardTitle}>Some title</Card.Title>
          <Card.Text className={Styles.CardText}>Some text with letters</Card.Text>
        </Card.Body>  
      </Card>
    </Col>
  )
}


const mapStateToProps = (state: any) => {
  return {
      
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
     
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublicCard)
