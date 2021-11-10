import React from 'react'
import { Container, Title, Data } from './style'

let months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

let days = [
  'Domingo',
  'Segunda-Feira',
  'Terça-Feira',
  'Quarta-Feira',
  'Quinta-Feira',
  'Sexta-Feira',
  'Sabado'
]

let d = new Date()
let day = d.getDate()
let weekday = days[d.getDay()]
let month = months[d.getMonth()]
let year = d.getFullYear()

const Header = () => {
  return (
    <Container>
      <Title>Climate News</Title>
      <Data>
        {weekday}, {day} de {month} de {year}
      </Data>
    </Container>
  )
}

export default Header
