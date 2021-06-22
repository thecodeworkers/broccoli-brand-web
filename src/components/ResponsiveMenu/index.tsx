import React, { useState } from 'react'
import styles from './styles.module.scss'
import { World, Coin, User } from '@images/svg'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage, setLoader, openModal, logout, changeCurrencies } from '@store/actions'
import { useRouter } from 'next/router'
import { createMarkup, scrolling } from '@utils'

const ResponsiveMenu = ({ show = 0, method, data, language, reference }) => {
  const [unfold, setUnfold] = useState(false)

  const { user: { isAuth }, resource: { currency, currencies }, } = useSelector((state: any) => state)

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

  const modal = (type) => {
    dispatch(openModal(type))
  }

  const assignShow = () => {
    if (unfold) return styles._show
    return styles._hide
  }

  const changeUnfold = () => {
    if (unfold) setUnfold(false)
    if (!unfold) setUnfold(true)
  }

  const changeLang = (event) => {
    const lang = event.target.value
    dispatch(changeLanguage(lang))

    if (typeof window !== 'undefined') {
      document.cookie = `lang=${lang}`
    }
  }

  const changeCurrency = (event) => {
    const iso = event.target.value
    dispatch(changeCurrencies(iso))
  }

  return (
    <div className={assignClass()}>
      <div className={[styles._content, unfold ? styles._listed : styles._noListed].join(" ")}>
        <section className={styles._internalLinks}>
          {data?.navigationBar?.navigation?.map((nav, index) => {
            if (index == 3) {
              if (router.pathname == '/about-us' || router.pathname == '/') {
                return (
                  <a key={index}>
                    <div onClick={() => scrolling(reference, 100)} className={[styles._internalSection, index == 0 ? styles._homeSection : ''].join(" ")}>
                      <p className={styles._linkText}>{nav.text}</p>
                    </div>
                  </a>
                )
              }
              return (
                <div key={index}>
                  <div onClick={() => navigation('/#contact-us', true)} className={[styles._internalSection, index == 0 ? styles._homeSection : ''].join(" ")}>
                    <p className={styles._linkText}>{nav.text}</p>
                  </div>
                </div>
              )
            }
            return (
              <div key={index}>
                <div onClick={() => navigation(nav.link, true)} className={[styles._internalSection, index == 0 ? styles._homeSection : ''].join(" ")}>
                  <p className={styles._linkText}>{nav.text}</p>
                  {index == 0 ? <img className={styles._whiteArrow} src='images/backgrounds/white-arrow.svg' alt='arrow' onClick={() => changeUnfold()} /> : ''}
                </div>
                {index == 0 ?
                  <div className={assignShow()}>
                    <div className={styles._shoppingContainer}>
                      {data?.navigationBar?.dropdownMenu?.columnList.map((item, index) => (
                        <div className={styles._shoppingContent} key={index}>
                          <div className={styles._categories} dangerouslySetInnerHTML={createMarkup(item.list)}></div>
                        </div>
                      ))}
                    </div>
                  </div> : ''
                }
              </div>
            )
          })}
        </section>

        <section className={styles._internalSettings}>
          <div className={styles._settingsContainer}>
            <div className={styles._iconSettings}>
              <div className={styles._icon}><World width='16' height='16' /></div>
              <p className={styles._settingText}>Idioma</p>
            </div>
            <p className={styles._lightText}>
              <select name="language" id="language" value={language} onChange={changeLang}
                className={[styles._selectLang, styles._lightText, styles._pointer].join(" ")}>
                <option value='ES' className={styles._lightText}>ES</option>
                <option value='EN' className={styles._lightText}>EN</option>
              </select>
            </p>
          </div>
          <div className={styles._settingsContainer}>
            <div className={styles._iconSettings}>
              <div className={styles._icon}><Coin width='16' height='16' /></div>
              <label htmlFor="currency" className={styles._customSelect}>
                <select name="currency" id="currency" value={currency?.iso} onChange={changeCurrency} placeholder={'Idioma'} className={styles._topText}>
                  {currencies?.map((current, index) => (<option key={index} value={current?.currencies?.iso}>{current?.currencies?.name}</option>))}
                </select>
              </label>
            </div>
          </div>
          {
            !isAuth ?
              <div className={styles._settingsContainer}>
                <div className={styles._iconSettings}>
                  <div className={styles._icon}><User width='16' height='16' /></div>
                  <p className={[styles._settingText, styles._pointer].join(" ")} onClick={() => { modal('register') }}>
                    {data?.navigationBar?.register}
                  </p>
                </div>
              </div> : ''
          }
          {
            isAuth ?
              <div className={styles._settingsContainer}>
                <div className={styles._iconSettings}>
                  <div className={styles._invisibleIcon}></div>
                  <p className={[styles._redText, styles._pointer].join(" ")} onClick={() => dispatch(logout())}>{data?.navigationBar?.logout}</p>
                </div>
              </div> :
              <div className={styles._settingsContainer}>
                <div className={styles._iconSettings}>
                  <div className={styles._invisibleIcon}></div>
                  <p className={[styles._settingText, styles._pointer].join(" ")} onClick={() => modal('login')}>{data?.navigationBar?.login}</p>
                </div>
              </div>
          }
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
