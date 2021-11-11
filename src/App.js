import React from 'react'

import CardsContainer from './components/CardsContainer'
import Header from './components/Header'
import Footer from './components/Footer'

import { GlobalStyles } from './styles/GlobalStyles'

function App() {
  return (
    <div className="App">
      <Header />
      <CardsContainer />
      <Footer />

      <GlobalStyles />
    </div>
  )
}

export default App
