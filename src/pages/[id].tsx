import React from 'react'
import { useSelector } from 'react-redux'
import { wrapper } from '@store'
import { getPages } from '@store/actions'
import { Individual } from '@components'
import { getCurrentLang } from '@utils'

const IndividualProduct = () => {
  const { page: { productPage: shop } } = useSelector((state: any) => state)
  return <Individual data={shop} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store, params, req }) => {
    const currentLang = getCurrentLang(req)
    return store.dispatch(getPages('productPage', params.id, currentLang))
  }
)

export default IndividualProduct
