

import * as React from "react"
import { Navbar, Nav, Form, FormControl, Button, Image } from 'react-bootstrap'
import dashboardIcon from './dashboard.svg'
import Styles from './styles.module.css'
import { NavLink } from 'react-router-dom'


export type HeaderProps = {
  logoText: string,
  optionsList: string[],
  isSearchEnabled: boolean,
  searchClickHandler(searchText: string): void,
  onSomeOptionClick(optionText: string): void
}


const Header = (props: HeaderProps) => {

  const createTitle = (optionText: string) => {
    switch (optionText) {
      
      case "пользователи": return (<Nav.Link><NavLink style={{ color: 'white', textDecoration: 'none' }} to='/users'>{optionText}</NavLink></Nav.Link>)

      case "вход": return (<Nav.Link style={{ color: 'white' }} key={optionText} onClick={() => props.onSomeOptionClick(optionText)}>{optionText}</Nav.Link>)

      case "главная": return (<Nav.Link><NavLink style={{ color: 'white', textDecoration: 'none' }} to='#'>{optionText}</NavLink></Nav.Link>)

      default: return (<Nav.Link style={{ color: 'white' }} key={optionText}>{optionText}</Nav.Link>)
    }
  }

  return (
    <Navbar bg="primary" variant="light">
      <Navbar.Brand className={Styles.BrandWrapper}>
        <Image src={dashboardIcon} className={Styles.LogoIcon} />
        {props.logoText}
      </Navbar.Brand>
      <Nav className="mr-auto" >
        {
          props.optionsList.map(optionText => createTitle(optionText)
          )
        }

        {
          props.isSearchEnabled
          &&
          <Button variant="outline-info" size="sm" className="d-block d-sm-none">Поиск</Button>
        }
      </Nav>
      {
        props.isSearchEnabled
        &&
        <Form inline className="d-none d-sm-block">
          <FormControl type="text" placeholder="Поиск" className="mr-sm-2" />
          <Button variant="outline-info">Найти</Button>
        </Form>
      }
    </Navbar>
  )
}

export default Header
//className={Route} component={UsersProfiles} path='/users'
