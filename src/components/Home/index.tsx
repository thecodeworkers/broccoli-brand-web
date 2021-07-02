import React, { useCallback } from 'react'
import Head from 'next/head'
import { FirstBanner, Social, Brand, Outstanding, Contact } from './elements'
import { Navbar, Footer } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { setContact } from '@store/actions'

const Home = ({ data }) => {

  const dispatch = useDispatch()
  const { intermittence: { contact } } = useSelector((state: any) => state)

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
    <div>
      <Head>
        <title>Broccoli</title>
      </Head>
      <Navbar />
      <FirstBanner data={data?.bannerPrincipal} />
      <Outstanding data={data?.outstanding} />
      <Brand data={data?.brand} />
      <Social data={data?.webPromotion} />
      <div ref={contactRef}>
        <Contact data={data?.contact} />
      </div>
      <Footer />
    </div>
  ) : <div></div>
}

export default Home
