import React from 'react'
import'./Header.css'
import AmiiboLogo from './AmiiboLogo.png'

const Header = (props) => {
  return (
    <header>
      <img src={AmiiboLogo} />
    </header>
  )
}

export default Header
