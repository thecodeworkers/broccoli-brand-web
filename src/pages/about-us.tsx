import React from 'react'
import { useSelector } from 'react-redux'
import { wrapper } from '@store'
import { getResources } from '@store/actions'
import { AboutUs } from '@components'

const AboutUsPage = () => {
  const { page: { aboutPage: { aboutUs } } } = useSelector((state: any) => state)
  return <AboutUs data={aboutUs} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getResources('aboutPage'))
)

export default AboutUsPage
