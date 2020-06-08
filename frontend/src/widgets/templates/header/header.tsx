

import * as React from "react"
import { Navbar, Nav, Form, FormControl, Button, Image } from 'react-bootstrap'
import dashboardIcon from './dashboard.svg'
import Styles from './styles.module.css'



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
      case "пользователи": return (<Nav.Link href='/users'>{optionText}</Nav.Link>)
      case "вход": return (<Nav.Link key={optionText} onClick={() => props.onSomeOptionClick(optionText)}>{optionText}</Nav.Link>)
      default: return ( <Nav.Link key={optionText}>{optionText}</Nav.Link>)
    }
  }

  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand className={Styles.BrandWrapper}>
        <Image src={dashboardIcon} className={Styles.LogoIcon} />
        {props.logoText}
      </Navbar.Brand>
      <Nav className="mr-auto">
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
// className={Route} component={UsersProfiles} path='/users' 