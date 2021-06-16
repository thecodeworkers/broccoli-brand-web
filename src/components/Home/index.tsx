import React, { useRef } from 'react'
import Head from 'next/head'
import { FirstBanner, Social, Brand, Outstanding, Contact } from './elements'
import { Navbar, Footer } from '@components'

const Home = ({ data }) => {
  const contact = useRef()
  
  return data ? (
    <div>
      <Head>
        <title>Broccoli</title>
      </Head>
      <Navbar reference={contact} />
      <FirstBanner data={data?.bannerPrincipal} />
      <Outstanding data={data?.outstanding} />
      <Brand data={data?.brand} />
      <Social data={data?.webPromotion} />
      <div ref={contact}>
      <Contact data={data?.contact} />
      </div>
      <Footer reference={contact} />
    </div>
  ) : <div></div>
}

export default Home
