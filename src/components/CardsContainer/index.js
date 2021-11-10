import React, { useEffect, useState } from 'react'
import axios from 'axios'

import GuardianLogo from '../../assets/guardian.png'
import LatLogo from '../../assets/latimes.png'
import TelegraphLogo from '../../assets/telegraph.png'
import TimesLogo from '../../assets/thetimes.png'
import TnytLogo from '../../assets/nyt.png'

import Card from '../Card'

import { Container, Div, Link, List, Loading } from './style'

const CardsContainer = () => {
  const [newsList, setNewsList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [newsSource, setNewsSource] = useState()

  useEffect(() => {
    axios
      .get('https://myfirstapistudy.herokuapp.com/news')
      .then((response) => setNewsList(response.data))
      .then(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`https://myfirstapistudy.herokuapp.com/news/${newsSource}`)
      .then((response) => setNewsList(response.data))
      .then(() => setIsLoading(false))
  }, [newsSource])

  return (
    <>
      {isLoading ? (
        <Loading>Carregando...</Loading>
      ) : (
        <>
          <List>
            <Link onClick={() => setNewsSource('guardian')}>
              <img src={GuardianLogo} alt="Guardian Logo" />
            </Link>
            <Link onClick={() => setNewsSource('latimes')}>
              <img src={LatLogo} alt="LA Times Logo" />
            </Link>
            <Link onClick={() => setNewsSource('telegraph')}>
              <img src={TelegraphLogo} alt="Telegraph Logo" />
            </Link>
            <Link onClick={() => setNewsSource('thetimes')}>
              <img src={TimesLogo} alt="The Times Logo" />
            </Link>
            <Link onClick={() => setNewsSource('nyt')}>
              <img src={TnytLogo} alt="The New York Times Logo" />
            </Link>
          </List>
          <Div>
            <Container>
              {newsList
                .filter((item, idx) => idx < 8)
                .map((item) => (
                  <Card
                    key={item.title}
                    source={item.source}
                    title={item.title}
                    url={item.url}
                  />
                ))}
            </Container>
          </Div>
        </>
      )}
    </>
  )
}

export default CardsContainer
