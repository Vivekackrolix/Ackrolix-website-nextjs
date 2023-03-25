import Footer from '@component/components/common/Footer'
import Header from '@component/components/common/Header'
import Heading from '@component/components/common/Heading'
import AllExperts from '@component/components/expert/AllExperts'
import React from 'react'

const Experts = () => {
  return (
    <div>
        <Header/>
        <Heading
      titletext="Experts"
      title="Our Experts "
      subtext="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex."
      />
        <AllExperts/>
        <Footer/>
    </div>
  )
}

export default Experts