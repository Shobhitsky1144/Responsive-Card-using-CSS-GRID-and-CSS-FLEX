import React from 'react'
import FlexCards from './components/flex_cards/FlexCards'
import { GridCards } from './components/grid_cards/GridCards'

const App = () => {
  return (
    <>
      <h1>Responsive Cards using Flex and grid</h1>
      <FlexCards/>
      <GridCards/>
    </>
  )
}

export default App