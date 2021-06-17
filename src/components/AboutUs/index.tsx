import React, { useRef } from 'react'
import Head from 'next/head'
import { FirstBanner, Contact, Shop, Sponsors, Brand } from './elements'
import { Navbar, Footer } from '@components'

const AboutUs = ({ data }) => {
  const contact = useRef()

  return data ? (
    <div >
      <Head>
        <title>Broccoli</title>
      </Head>
      <Navbar reference={contact} />
      <FirstBanner data={data.mainBanner} />
      <Brand data={data.brandImage}/>
      <Shop data={data.shop} />
      <Sponsors data={data.sponsors} />
      <div ref={contact}>
      <Contact data={data.contact} />
      </div>
      <Footer reference={contact} />
    </div>
  ) : <div></div>
}

export default AboutUs;

