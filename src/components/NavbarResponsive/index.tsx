import React, { useState } from 'react'
import styles from './styles.module.scss'
import { BroccoliLogo } from '@images/components'
import { Menu, Bag, User, Search } from '@images/svg'
import { ResponsiveMenu, ResponsiveSearch } from '@components'
import { setLoader, openModal } from '@store/actions'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

const NavbarResponsive = ({ data, language }) => {

  const [show, setShow] = useState(0)
  const [showSearch, setSearch] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()

  const deployMenu = () => {
    if (show === 0) return setShow(1)
    if (show === 1) return setShow(2)
    if (show === 2) return setShow(1)
  }

  const resetShow = () => setShow(0)

  const deploySearch = () => {
    if (showSearch) return setSearch(false)
    return setSearch(true)
  }

  const navigation = (route, loader = false) => {
    if (router.pathname != route) {
      if (loader) dispatch(setLoader(true))
      router.push(route)
    }
  }

  const modal = (type) => {
    dispatch(openModal(type))
  }

  return (
    <>
      <nav className={styles._nav}>
        <section className={styles._child}>
          <div className={styles._logo} onClick={() => { navigation('/', true) }}>
            <BroccoliLogo />
          </div>
          <div className={styles._menuIcons}>
            <div className={styles._iconContainer} onClick={deploySearch}><Search width='18' height='18' /></div>
            <div className={styles._iconContainer} onClick={() => modal('bag')}><Bag width='18' height='18' /></div>
            <div className={styles._iconContainer} onClick={() => { navigation('profile', true) }}><User width='18' height='18' /></div>
            <div className={styles._iconContainer} onClick={deployMenu}><Menu width='18' height='18' /></div>
          </div>
        </section>
      </nav>

      <ResponsiveSearch show={showSearch} method={resetShow} />

      <ResponsiveMenu show={show} method={resetShow} data={data} language={language} />
    </>
  )
}

export default NavbarResponsive;
