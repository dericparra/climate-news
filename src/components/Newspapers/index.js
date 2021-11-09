import React from 'react'
import { List, Link } from './styles'

import GuardianLogo from '../../assets/guardian.png'
import LatLogo from '../../assets/latimes.png'
import TelegraphLogo from '../../assets/telegraph.png'
import TimesLogo from '../../assets/thetimes.png'
import TnytLogo from '../../assets/nyt.png'

const Newspapers = () => {
  return (
    <List>
      <Link href="#">
        <img src={GuardianLogo} alt="Guardian Logo" />
      </Link>
      <Link href="#">
        <img src={LatLogo} alt="LA Times Logo" />
      </Link>
      <Link href="#">
        <img src={TelegraphLogo} alt="Telegraph Logo" />
      </Link>
      <Link href="#">
        <img src={TimesLogo} alt="The Times Logo" />
      </Link>
      <Link href="#">
        <img src={TnytLogo} alt="The New York Times Logo" />
      </Link>
    </List>
  )
}

export default Newspapers
