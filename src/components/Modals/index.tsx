
import React from 'react'
import { useSelector } from 'react-redux'
import { Login, Recover, Register, MinimalBag } from './elements'

const Modals = () => {
  const { modal } = useSelector((state: any) => state)
  switch (modal.modalType) {
    case 'register':
      return <Register />
    case 'login':
      return <Login />
    case 'recover':
      return <Recover />
    case 'bag':
      return <MinimalBag />
    default:
      return null
  }
}

export default Modals
