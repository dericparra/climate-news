import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Card from '../Card'

import { Container, Div } from './style'

const CardsContainer = () => {
  const [newsList, setNewsList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://myfirstapistudy.herokuapp.com/news')
      .then((response) => setNewsList(response.data))
      .then(() => setIsLoading(false))
  }, [])

  return (
    <>
      {isLoading ? (
        <h1>Carregando</h1>
      ) : (
        <Div>
          <Container>
            {newsList.map((item) => (
              <Card
                key={item.title}
                source={item.source}
                title={item.title}
                url={item.url}
              />
            ))}
          </Container>
        </Div>
      )}
    </>
  )
}

export default CardsContainer
