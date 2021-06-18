import React from 'react'
import { useSelector } from 'react-redux'
import { wrapper } from '@store'
import { dispatchPage } from '@utils'
import { Home } from '@components'

const HomePage = () => {
  const { page: { homePage: { home } } } = useSelector((state: any) => state)
  return <Home data={home} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  props => { 
    return dispatchPage(props, 'homePage')
  }
)

export default HomePage
