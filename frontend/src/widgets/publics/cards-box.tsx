
 
import * as React from "react"
import PublicCard from '../templates/cards/public-card'
import Styles from './styles.module.css'
import { connect } from 'react-redux'
import actions from '../header/actions-header'
import {PublicCartProps} from '../../widgets/templates/cards/public-card'

export const CardsBox = (props: any) => {
  
  
  const getUsersProfiles=()=>{
    props.setUsers()
  }

  const stateProps: PublicCartProps={
       users: props.users,
       getUsersProfiles,

  }

  return(
    <PublicCard {...stateProps}/>
  )

}

const mapStateToProps = (state: any) => {
  return {
      ...state.usersReducer 
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
     setUsers:() => dispatch(actions.getDataUsers)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsBox)
// let items : any [] = []
  // for (let i of [1, 2, 3,4, 5, 6])
  //   items.push((
  //     <PublicCard title="username" text="adress" img="gggdas"/>
  //   ))

// let userCards = []
  // for (const userData of [1, 2, 3])
  //   userCards.push((<p>{userData}<p>))

  // return (
  //   <CardDeck className={Styles.CardWrapper}>
  //     hello
  //   </CardDeck>
  // )
  // }
  