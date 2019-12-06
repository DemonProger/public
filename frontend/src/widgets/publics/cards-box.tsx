
 
import * as React from "react"
import { CardDeck } from 'react-bootstrap'
import PublicCard from './public-card'
import Styles from './styles.module.css'


export const CardsBox = () => {

  let items : any [] = []
  for (let i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    items.push((
      <PublicCard key={i}/>
    ))

  return (
    <CardDeck className={Styles.CardWrapper}>
      {
        items
      }
    </CardDeck>
  )
}


export default CardsBox