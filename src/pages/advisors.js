import List from '@component/components/advisors/List'
import Footer from '@component/components/common/Footer'
import Header from '@component/components/common/Header'
import Heading from '@component/components/common/Heading'
import React from 'react'

const Advisors = () => {
  return (
    <div> <Header />
    <Heading
    titletext="Advisors"
    title="Our Advisors"
    subtext="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex."
    />
    <List/>
    <Footer />
    </div>
  )
}

export default Advisors