import React from 'react'
import Head from 'next/head'
import { FirstBanner, Social, Outstanding, Contact } from './elements'
import { Navbar, Footer } from '@components'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Broccoli</title>
      </Head>
      <Navbar />
      <FirstBanner />
      <Outstanding />
      <Social />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
