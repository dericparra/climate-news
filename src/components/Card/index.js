import React from 'react'

import BBCLogo from '../../assets/bbc.png'

import { Cards, Newspaper, Text } from './style'

const Card = () => {
  return (
    <Cards>
      <Newspaper>
        <img src={BBCLogo} alt="BBC Logo" />
      </Newspaper>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </Text>
    </Cards>
  )
}

export default Card
