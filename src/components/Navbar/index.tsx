import React from 'react'
import styles from './styles.module.scss'
import { BroccoliLogo } from '@images/components'
import { World, Coin, Bag, User, Pipe } from '@images/svg'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage, logout, openModal, setLoader } from '@store/actions'
import { useRouter } from 'next/router'
import { NavbarResponsive } from '@components'

const Navbar = () => {

  const dispatch = useDispatch()
  const router = useRouter()
  const { resource: { language, general: generalPage = {} }, user } = useSelector((state: any) => state)
  const { general } = generalPage

  const changeLang = (event) => dispatch(changeLanguage(event.target.value))

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
      <nav className={styles._main}>
        <section className={styles._topContainer}>
          <div className={styles._logoContainer}>
            <BroccoliLogo />
          </div>
          <div className={styles._topSections}>
            <div className={styles._topSection}>
              <World />
              <label htmlFor="language" className={styles._customSelect}>
                <select name="language" id="language" value={language} onChange={changeLang} placeholder={'Idioma'} className={styles._topText}>
                  <option value='ES'>Espanol</option>
                  <option value='EN'>English</option>
                </select>
              </label>
            </div>
            <div className={styles._topSection}>
              <Coin />
              <div className={styles._topText}>Dólares</div>
            </div>
            <div className={styles._topSection}>
              <Bag />
              <div className={styles._topText}>{general?.navigationBar?.carText}</div>
            </div>
            <div className={styles._topSection}>
              <User />
              {user.isAuth ? (
                <>
                  <div className={[styles._topText, styles._rightMargin].join(" ")}>{user.user?.email}</div>
                  <Pipe />
                  <div className={styles._topText} onClick={() => dispatch(logout())}>{general?.navigationBar?.logout}</div>
                </>
              ) : (
                <>
                  <div className={[styles._topText, styles._rightMargin].join(" ")} onClick={() => modal('login')}>{general?.navigationBar?.login}</div>
                  <Pipe />
                  <div className={styles._topText} onClick={() => modal('register')}>{general?.navigationBar?.register}</div>
                </>
              )}
            </div>
          </div>
        </section>
        <section className={styles._bottomContainer}>
          <div className={styles._bottomSectionsContainer}>
            <div className={styles._bottomSections}>
              {general?.navigationBar?.navigation?.map((nav, index) => (
                <div onClick={() => navigation(nav.link, true)} key={index} className={styles._bottomSection}>
                  <p className={styles._bottomText}>{nav.text}</p>
                </div>
              ))}
            </div>
            <div className={styles._searchContainer}>
              <div className={styles._inputContainer}>
                <input type="text" className={styles._input} />
                <img src='images/backgrounds/search.svg' className={styles._inputImg} />
              </div>
            </div>
          </div>
        </section>
      </nav>

      <div className={styles._responsive}>
        <NavbarResponsive data={general} />
      </div>
    </>
  )
}

export default Navbar