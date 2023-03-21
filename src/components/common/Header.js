import React from 'react'
import HeaderLogo from '../Header/HeaderLogo'
import Navbar from '../Header/Navbar'

const Header = () => {
  return (
    <div className='container-ack'>
      <HeaderLogo />
      <hr/>
      <Navbar/>
    </div>
  )
}

export default Header