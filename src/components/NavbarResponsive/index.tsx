import { useState } from 'react'
import styles from './styles.module.scss'
import { BroccoliLogo } from '@images/components'
import { Menu, Bag, User, Search } from '@images/svg'

const NavbarResponsive = () => {

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
          <div className={styles._iconContainer}><Menu width='18' height='18'/></div>
        </div>
      </section>
    </nav>
    </>
  )
}

export default NavbarResponsive;
