import React from 'react'
import Head from 'next/head'
import { FirstBanner, Contact, Brands, Sponsors } from './elements'
import { Navbar, Footer } from '@components'

const AboutUs = () => {

  return (
    <div >
      <Head>
        <title>Broccoli</title>
      </Head>
      <Navbar />
      <FirstBanner />
      <Brands />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  )
}

export default AboutUs;

