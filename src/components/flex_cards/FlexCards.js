import React from 'react'
import { cardData } from '../../data/carddata'
import './flexcard.css'

const FlexCards = () => {

  return (
    <>
       <h1>FLEX CARD</h1><br/>
  
    <div className='cards'>
   
      {cardData?.map((card)=>{
        return(
          <div className='card'>
          <div className='cards-header'>
         <h2>{card.title}</h2>
          </div>
          <div className='cards-body'>
   <p>{card.desc}</p>
          </div>
        </div>
        )
      })}
    
    </div>
      </>
  )
}

export default FlexCards