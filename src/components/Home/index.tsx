import React from 'react'
import Head from 'next/head'
import { FirstBanner, Social, Brand, Outstanding, Contact } from './elements'
import { Navbar, Footer } from '@components'

const Home = ({ data }) => {
  return data ? (
    <div>
      <Head>
        <title>Broccoli</title>
      </Head>
      <Navbar />
      <FirstBanner data={data?.bannerPrincipal} />
      <Outstanding data={data?.outstanding} />
      <Brand />
      <Social data={data?.webPromotion} />
      <Contact data={data?.contact} />
      <Footer />
    </div>
  ) : <div></div>
}

export default Home
