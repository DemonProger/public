
import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './thirdparty/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Tollbar from './widgets/left-toolbar/left-toolbar'
import UpperTollbar from './widgets/nav-map/nav-map'
import CardsBox from './widgets/publics/cards-box'
import Registration from './widgets/registration/registration'
import Header from './widgets/header/header'

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        {/* <UpperTollbar/> */}
        <Row className="justify-content-md-center">
        </Row>
        <Row>
          <Col sm={3} className="d-none d-sm-block">
            <Tollbar/>
          </Col>
          <Col sm={9}>
            {/* <CardsBox /> */}
            {/* <Route path='/' component={App}></Route>  */}
            {/* <Route path='/home' component={CardsBox}></Route> */}
            {/* <Route path='/main' component={MainPage}> </Route> */}
            <Route path='/users' render={()=><CardsBox/>}></Route>
          </Col>

        </Row>
        <Registration />
      </Container>
    </BrowserRouter>
  )
}
export default App

