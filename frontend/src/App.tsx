
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './thirdparty/bootstrap/dist/css/bootstrap.css'

import CustomNavbar from './widgets/navbar/navbar'
import Tollbar from './widgets/left-toolbar/left-toolbar'
import CardsBox from './widgets/cards/cards-box'
import NavMap from './widgets/nav-map/nav-map'


const App = () => {
    return (      
      <Container>              
        <CustomNavbar />  
        <Row className="justify-content-md-center">
          <NavMap />          
        </Row>
        <Container>
          <Row>
            <Col sm={2} className="d-none d-sm-block">
              <Tollbar />
            </Col>
            <Col sm={10}>
              <CardsBox />
            </Col>
          </Row>
        </Container>        
      </Container>                     
    )
}

export default App