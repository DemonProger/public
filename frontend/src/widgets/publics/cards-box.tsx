
 
import * as React from "react"
import { CardDeck } from 'react-bootstrap'
import PublicCard from '../templates/cards/public-card'
import Styles from './styles.module.css'
import { connect } from 'react-redux'


export const CardsBox = () => {

  let items : any [] = []
  for (let i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    items.push((
      <PublicCard key={i} title="test title" text="test text"/>
    ))

  return (
    <CardDeck className={Styles.CardWrapper}>
      {
        items
      }
    </CardDeck>
  )
}


/// export default CardsBox

const mapStateToProps = (state: any) => {
  return {
      
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
     
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsBox)