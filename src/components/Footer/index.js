import React from 'react'
import { Contact, Email, Phone } from './style'

const Footer = () => {
  return (
    <Contact>
      <Email href="mailto: parradeko@gmail.com" target="_blank">
        parradeko@gmail.com{' '}
      </Email>
      <Phone href="https://wa.me/5514997618477" target="_blank">
        (14) 99761-8477{' '}
      </Phone>
    </Contact>
  )
}

export default Footer
