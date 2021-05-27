import React from 'react'
import { useSelector } from 'react-redux'
import { wrapper } from '@store'
import { getResources } from '@store/actions'
import { Home } from '@components'

const HomePage = () => {
  const { page: { homePage: { home } } } = useSelector((state: any) => state)
  return <Home data={home} />
}

export const getStaticProps = wrapper.getStaticProps(
  ({ store }) => store.dispatch(getResources())
)

export default HomePage
