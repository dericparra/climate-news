import React from 'react'
import { Container, Title, Data } from './style'

let d = new Date()
let day = d.getDate()
let month = d.getMonth()
let year = d.getFullYear()

const Header = () => {
  return (
    <Container>
      <Title>Climate News</Title>
      <Data>
        {day}/{month + 1}/{year}
      </Data>
    </Container>
  )
}

export default Header
