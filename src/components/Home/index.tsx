import React, { useRef, useEffect } from 'react'
import Head from 'next/head'
import { FirstBanner, Social, Brand, Outstanding, Contact } from './elements'
import { Navbar, Footer } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { setContact } from '@store/actions'

const Home = ({ data }) => {

  const dispatch = useDispatch()
  const { resource: { contact } } = useSelector((state: any) => state)
  const resultRef: any = useRef()

  useEffect(() => {
    console.log(contact, 'contact')
    console.log(resultRef.current)
    if (contact && resultRef.current) {
      const scrollToResults = () => {
        resultRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
      console.log('disable')
      dispatch(setContact(false))
      scrollToResults()
    }

  }, [contact, resultRef.current])

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
      <div ref={resultRef}>
        <Contact data={data?.contact} />
      </div>
      <Footer />
    </div>
  ) : <div></div>
}

export default Home
