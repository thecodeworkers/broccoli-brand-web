import React, { useRef, useEffect } from 'react'
import Head from 'next/head'
import { FirstBanner, Contact, Shop, Sponsors, Brand } from './elements'
import { Navbar, Footer } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { setContact } from '@store/actions'
import { useCallback } from 'react'

const AboutUs = ({ data }) => {
  const dispatch = useDispatch()
  const { resource: { contact } } = useSelector((state: any) => state)

  const contactRef = useCallback((resultRef) => {
    if (contact && resultRef) {
      const scrollToResults = () => {
        resultRef.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
      dispatch(setContact(false))
      scrollToResults()
    }
  }, [contact]);

  return data ? (
    <div >
      <Head>
        <title>Broccoli</title>
      </Head>
      <Navbar />
      <FirstBanner data={data.mainBanner} />
      <Brand data={data.brandImage} />
      <Shop data={data.shop} />
      <Sponsors data={data.sponsors} />
      <div ref={contactRef}>
        <Contact data={data.contact} />
      </div>
      <Footer />
    </div>
  ) : <div></div>
}

export default AboutUs;

