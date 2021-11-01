import React from 'react'

import CardsContainer from './components/CardsContainer'
import Header from './components/Header'
import Newspapers from './components/Newspapers'

import { GlobalStyles } from './styles/GlobalStyles'

function App() {
  return (
    <div className="App">
      <Header />
      <Newspapers />
      <CardsContainer />

      <GlobalStyles />
    </div>
  )
}

export default App
