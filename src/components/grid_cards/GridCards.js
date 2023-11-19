import React from 'react'
import { cardData } from '../../data/carddata';
import './gridcard.css'

export const GridCards = () => {
  return (
    <>
    <h1>Grid Cards</h1>
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
