import React from 'react'
import { useSelector } from 'react-redux'
import { wrapper } from '@store'
import { dispatchPage } from '@utils'
import { AboutUs } from '@components'

const AboutUsPage = () => {
  const { page: { aboutPage: { aboutUs } } } = useSelector((state: any) => state)
  return <AboutUs data={aboutUs} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  props => dispatchPage(props, 'aboutPage')
)

export default AboutUsPage
