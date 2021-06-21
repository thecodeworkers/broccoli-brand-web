import React, { useEffect } from 'react'
import { UserData } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { checkoutReset, closeModal, setLoader } from '@store/actions'
import { dispatchPage } from '@utils'
import { wrapper } from '@store'

const EditUser = () => {
  const { page: { userPage: { userPage } } } = useSelector((state: any) => state)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(closeModal())
    dispatch(setLoader(false))
    dispatch(checkoutReset())
  }, [])

  return <UserData data={userPage} />
}
export const getServerSideProps = wrapper.getServerSideProps(
  props => dispatchPage(props, 'userPage')
)

export default EditUser