import Footer from '@component/components/common/Footer'
import Header from '@component/components/common/Header'
import Backend from '@component/components/technology/Backend'
import Heading from '@component/components/technology/Heading'
import Section from '@component/components/technology/Section'
import Head from 'next/head'
import React from 'react'

const Technology = () => {
  return (
    <div>
        <Header/>
        <Head>
        <title>Technology</title>
      </Head>
       <Heading/>
      <Section/>
      <Backend/>
        <Footer/>
    </div>
  )
}

export default Technology