import React from 'react'
import { List, Link } from './styles'

import BBCLogo from '../../assets/bbc.png'
import GuardianLogo from '../../assets/guardian.png'
import LatLogo from '../../assets/lat.png'
import TelegraphLogo from '../../assets/telegraph.png'
import TimesLogo from '../../assets/times.png'
import TnytLogo from '../../assets/tnyt.png'

const Newspapers = () => {
  return (
    <List>
      <Link href="#">
        <img src={BBCLogo} alt="BBC Logo" />
      </Link>
      <Link href="#">
        <img src={GuardianLogo} alt="BBC Logo" />
      </Link>
      <Link href="#">
        <img src={LatLogo} alt="BBC Logo" />
      </Link>
      <Link href="#">
        <img src={TelegraphLogo} alt="BBC Logo" />
      </Link>
      <Link href="#">
        <img src={TimesLogo} alt="BBC Logo" />
      </Link>
      <Link href="#">
        <img src={TnytLogo} alt="BBC Logo" />
      </Link>
    </List>
  )
}

export default Newspapers
