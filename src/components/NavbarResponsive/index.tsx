import React, { useState } from 'react'
import styles from './styles.module.scss'
import { BroccoliLogo } from '@images/components'
import { Menu, Bag, User, Search } from '@images/svg'
import { ResponsiveMenu } from '@components'

const NavbarResponsive = () => {

  const [ show, setShow ] = useState(0)

  const deployMenu = () => {
    if(show === 0) return setShow(1)
    if(show === 1) return setShow(2)
    if(show === 2) return setShow(1)
   }

   const resetShow = () => setShow(0)

  return (
    <>
    <nav className={styles._nav}>
      <section className={styles._child}>
        <div className={styles._logo}>
          <BroccoliLogo />
        </div>
        <div className={styles._menuIcons}>
          <div className={styles._iconContainer}><Search width='18' height='18' /></div>
          <div className={styles._iconContainer}><Bag width='18' height='18' /></div>
          <div className={styles._iconContainer}><User width='18' height='18' /></div>
          <div className={styles._iconContainer} onClick={deployMenu}><Menu width='18' height='18'/></div>
        </div>
      </section>
    </nav>

    <ResponsiveMenu show={show} method={resetShow}/>
    </>
  )
}

export default NavbarResponsive;
