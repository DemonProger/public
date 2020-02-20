
 
import * as React from "react"
import { Navbar, Nav, Form, FormControl, Button, Image } from 'react-bootstrap'
import dashboardIcon from '../../thirdparty/icons/dashboard.svg'
import Styles from './styles.module.css'


export type HeaderProps = {
  logoText: string, 
  optionsList: string[], 
  isSearchEnabled: boolean, 

  optionsClickHandler(clickedText: string): void, 
  searchClickHandler(searchText: string): void
}


export const Header = (props: HeaderProps) => {
  return (
    <Navbar bg="light" variant="light">
        <Navbar.Brand className={Styles.BrandWrapper}>
          <Image src={dashboardIcon} className={Styles.LogoIcon}/>
          {props.logoText}                   
        </Navbar.Brand>
            <Nav className="mr-auto">   
            
            { 
              props.optionsList.map(optionText => <Nav.Link key={optionText}>{optionText}</Nav.Link> )
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