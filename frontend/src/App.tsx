
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './thirdparty/bootstrap/dist/css/bootstrap.css'

import Header from './widgets/templates/header/header'
import Tollbar from './widgets/left-toolbar/left-toolbar'
import CardsBox from './widgets/publics/cards-box'
import NavMap from './widgets/nav-map/nav-map'
import Registration from './widgets/registration/registration'


const App = () => {
    return (      
      <Container>              
        <Header logoText="public" optionsList={["вход", "карта", "информация"]} isSearchEnabled={true} optionsClickHandler={() => {}} searchClickHandler={() => {}} />  
        <Row className="justify-content-md-center">
          <NavMap />          
        </Row>        
          <Row>
            <Col sm={3} className="d-none d-sm-block">
              <Tollbar />
            </Col>
            <Col sm={9}>
              <CardsBox />
            </Col>
          </Row>        
          <Registration />
      </Container>                     
    )
}

export default App