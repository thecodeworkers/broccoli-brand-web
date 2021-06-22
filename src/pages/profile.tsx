import React, { useEffect } from 'react'
import { Profile } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, setLoader } from '@store/actions'
import { dispatchPage } from '@utils'
import { wrapper } from '@store'

const ProfilePage = () => {
  const { page: { profilePage: { profile } } } = useSelector((state: any) => state)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(closeModal())
    dispatch(setLoader(false))
  }, [])

  return <Profile data={profile} />
}
export const getServerSideProps = wrapper.getServerSideProps(
  props => dispatchPage(props, 'profilePage')
)

export default ProfilePage