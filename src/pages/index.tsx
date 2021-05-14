import React from 'react'
import { useSelector } from 'react-redux'
// import { wrapper } from '@store'
// import { getPages } from '@store/actions'
import { Home, Navbar, Footer } from '@components'

const HomePage = () => {
  // const { page: { homePage: { home } } } = useSelector((state: any) => state)
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

// export const getStaticProps = wrapper.getStaticProps(
//   ({ store }) => store.dispatch(getPages('homePage'))
// )

export default HomePage
