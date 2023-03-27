import Footer from '@component/components/common/Footer'
import Header from '@component/components/common/Header'
import List from '@component/components/testimonial/List'
import Head from 'next/head'
import React from 'react'

const Testimonials = () => {
  return (
    <div>
        <Header/>
        <Head>
        <title>Testimonial</title>
      </Head>
       <List/>
        <Footer/>
    </div>
  )
}

export default Testimonials