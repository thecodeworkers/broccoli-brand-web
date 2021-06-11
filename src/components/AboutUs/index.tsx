import React from 'react'
import Head from 'next/head'
import { FirstBanner, Contact, Shop, Sponsors, Brand } from './elements'
import { Navbar, Footer } from '@components'

const AboutUs = ({ data }) => {
  return data ? (
    <div >
      <Head>
        <title>Broccoli</title>
      </Head>
      <Navbar />
      <FirstBanner data={data.mainBanner} />
      <Brand data={data.brandImage}/>
      <Shop data={data.shop} />
      <Sponsors data={data.sponsors} />
      <Contact data={data.contact} />
      <Footer />
    </div>
  ) : <div></div>
}

export default AboutUs;

