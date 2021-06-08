import React, { useState } from 'react'
import styles from './styles.module.scss'
import { World, Coin, User } from '@images/svg'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage, setLoader } from '@store/actions'
import { useRouter } from 'next/router'

const ResponsiveMenu = ({ show = 0, method, data}) => {

  const [unfold, setUnfold] = useState(false)

  const dispatch = useDispatch()
  const router = useRouter()

  const navigation = (route, loader = false) => {
    if (router.pathname != route) {
      if (loader) dispatch(setLoader(true))
      router.push(route)
    }
  }

  const assignClass = () => {
    if (show === 0) return styles._mainStatic
    if (show === 1) return styles._mainIn
    if (show === 2) return styles._mainOut
  }

  const assignShow = () => {
    if(unfold) return styles._show
    return styles._hide
  }

  const changeUnfold = () => {
    if(unfold) setUnfold(false)
    if(!unfold) setUnfold(true)
  }

  return (
    <div className={assignClass()}>
      <div className={[styles._content, unfold ? styles._listed : styles._noListed].join(" ")}>
        <section className={styles._internalLinks}>
          {data?.navigationBar?.navigation?.map((nav, index) => (
            <div key={index}>
              <div onClick={() => navigation(nav.link, true)} className={[styles._internalSection, index == 0 ? styles._homeSection : ''].join(" ")}>
                <p className={styles._linkText}>{nav.text}</p>
                {index == 0 ? <img className={styles._whiteArrow} src='images/backgrounds/white-arrow.svg' alt='arrow' onClick={() => changeUnfold()} /> : ''}
              </div>
              {index == 0 ? 
                <div className={assignShow()}>
                  <div className={styles._shoppingContainer}>
                    <div className={styles._shoppingTitle}>
                      <p className={styles._title}>Categorias</p>
                    </div>
                    <div className={styles._shoppingSections}>
                      <p className={styles._filter}>Pants</p>
                      <p className={styles._filter}>Shorts</p>
                      <p className={styles._filter}>Skirts</p>
                      <p className={styles._filter}>Jackets</p>
                      <p className={styles._filter}>Sweaters</p>
                      <p className={styles._filter}>Socks</p>
                    </div>
                    <div className={styles._shoppingTitle}>
                      <p className={styles._title}>Drops</p>
                    </div>
                    <div className={styles._shoppingSections}>
                      <p className={styles._filter}>Origen</p>
                      <p className={styles._filter}>Destiny</p>
                      <p className={styles._filter}>Tucan</p>
                    </div>
                  </div>
                </div> : ''
              }
            </div>
          ))}
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
