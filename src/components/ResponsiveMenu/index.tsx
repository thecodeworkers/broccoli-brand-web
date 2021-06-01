import React from 'react'
import styles from './styles.module.scss'
import { World, Coin, User } from '@images/svg'

const ResponsiveMenu = ({ show = 0, method}) => {

  const assignClass = () => {
    if (show === 0) return styles._mainStatic
    if (show === 1) return styles._mainIn
    if (show === 2) return styles._mainOut
  }

  return (
    <div className={assignClass()}>
      <div className={styles._content}>
        <section className={styles._internalLinks}>
          <div className={styles._internalSection}>
            <p className={styles._linkText}>HOME</p>
          </div>
          <div className={styles._internalSection}>
            <p className={styles._linkText}>ABOUT US</p>
          </div>
          <div className={styles._internalSection}>
            <p className={styles._linkText}>SHOP</p>
          </div>
          <div className={styles._internalSection}>
            <p className={styles._linkText}>CONTACTO</p>
          </div>
        </section>

        <section className={styles._internalSettings}>
          <div className={styles._settingsContainer}>
            <div className={styles._iconSettings}>
              <div className={styles._icon}><World width='16' height='16' /></div>
              <p className={styles._settingText}>Idioma</p>
            </div>
            <p className={styles._lightText}>ESP</p>
          </div>
          <div className={styles._settingsContainer}>
            <div className={styles._iconSettings}>
              <div className={styles._icon}><Coin width='16' height='16' /></div>
              <p className={styles._settingText}>Dólares</p>
            </div>
            <p className={styles._lightText}>Cambiar Moneda</p>
          </div>
          <div className={styles._settingsContainer}>
            <div className={styles._iconSettings}>
              <div className={styles._icon}><User width='16' height='16' /></div>
              <p className={styles._settingText}>Registrarse</p>
            </div>
          </div>
          <div className={styles._settingsContainer}>
            <div className={styles._iconSettings}>
              <div className={styles._invisibleIcon}></div>
              <p className={styles._redText}>Cerrar sesión</p>
            </div>
          </div>
        </section>

        <section className={styles._internalCopyright}>
          <div className={styles._copyrightContainer}>
            <div className={styles._rulesContainer}>
              <p className={styles._rules}>Politica de Privacidad</p>
              <p className={styles._rules}>Términos y Condiciones</p>
            </div>
            <div className={styles._copyContainer}>
              <p>Copyright © Broccoli Brand</p>
              <div className={styles._brandsContainer}>
                <div className={styles._marginLogo}>
                  <a href='https://www.thecodeworkers.com' target='_blank'>
                    <img src='images/logos/tcw-black-logo.svg' className={styles._logo} />
                  </a>
                </div>
                <div>
                  <a href='#' target='_blank'>
                    <img src='images/logos/banana-black-logo.svg' className={styles._logo} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ResponsiveMenu
