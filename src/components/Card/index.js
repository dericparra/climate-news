/* eslint-disable no-unused-vars */
import React from 'react'

import thetimes from '../../assets/thetimes.png'
import latimes from '../../assets/latimes.png'
import guardian from '../../assets/guardian.png'
import telegraph from '../../assets/telegraph.png'
import nyt from '../../assets/nyt.png'

import { Cards, Newspaper, Text } from './style'

// eslint-disable-next-line react/prop-types
const Card = ({ source, title, url }) => {
  return (
    <Cards>
      <Newspaper>
        <img
          src={`https://raw.githubusercontent.com/dericparra/climate-news/main/src/assets/${source}.png`}
          alt={`${source} Logo`}
        />
      </Newspaper>
      <Text href={url} target="blank">
        {title}
      </Text>
    </Cards>
  )
}

export default Card
