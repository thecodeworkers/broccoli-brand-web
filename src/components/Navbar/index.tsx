import React, { useState } from 'react'
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

  const [showCat, setShowCat] = useState(false)
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
            <div className={styles._topSection} onClick={() => modal('bag')}>
              <Bag />
              <div className={styles._topText}>{general?.navigationBar?.carText}</div>
            </div>
            <div className={styles._topSection}>
              <User />
              {user.isAuth ? (
                <>
                  <div className={[styles._topText, styles._rightMargin].join(" ")}>hi! {user.user?.firstName}</div>
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
          <section className={showCat ? styles._categoriesShow : styles._categoriesHide}>
            <div className={styles._categoriesContainer}>
              <div className={styles._halfCategories}>
                <div className={styles._listContainer}>
                  <div className={styles._listColum}>
                    <h4 className={styles._mainText}>CATEGORIES</h4>
                    <p className={styles._subText}>Pants</p>
                    <p className={styles._subText}>Shorts</p>
                    <p className={styles._subText}>Skirts</p>
                    <p className={styles._subText}>Jackets</p>
                    <p className={styles._subText}>Sweaters</p>
                    <p className={styles._subText}>Socks</p>
                  </div>
                  <div className={styles._listColum}>
                    <h4 className={styles._mainText}>DROPS</h4>
                    <p className={styles._subText}>Origen</p>
                    <p className={styles._subText}>Destiny</p>
                    <p className={styles._subText}>Tucan</p>
                  </div>
                </div>
              </div>
              <div className={styles._halfCategories}>
                <div className={styles._imageCategories}>
                  <div className={styles._imageContainer}>
                    <div className='_image'></div>
                  </div>
                  <div className={styles._imageDescription}>
                    <p className={styles._subText}>2020</p>
                    <p className={styles._subText}>COLECCION ORIGEN</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className={styles._bottomSectionsContainer}>
            <div className={styles._bottomSections}>
              {general?.navigationBar?.navigation?.map((nav, index) => {
                if(index != 3) {
                  return (
                    <div onClick={() => navigation(nav.link, true)} key={index} 
                      className={styles._bottomSection}
                      onMouseEnter={index == 2 ? () => setShowCat(true) : () => setShowCat(false)}
                      onMouseLeave={index == 2 ? () => setShowCat(false) : () => setShowCat(false)}
                    >
                      <p className={styles._bottomText}>{nav.text}</p>
                    </div>
                  )
                }

                if(router.pathname == 'about-us' || router.pathname == '/') {
                  return (
                    <a key={index} href={nav.link}
                      className={styles._bottomSection}
                      onMouseEnter={index == 2 ? () => setShowCat(true) : () => setShowCat(false)}
                      onMouseLeave={index == 2 ? () => setShowCat(false) : () => setShowCat(false)}
                    >
                      <p className={styles._bottomText}>{nav.text}</p>
                    </a>
                  )
                } else {
                  return (
                    <div key={index} onClick={() => navigation('/#contact', true)}
                      className={styles._bottomSection}
                      onMouseEnter={index == 2 ? () => setShowCat(true) : () => setShowCat(false)}
                      onMouseLeave={index == 2 ? () => setShowCat(false) : () => setShowCat(false)}
                    >
                      <p className={styles._bottomText}>{nav.text}</p>
                    </div>
                  )
                }

              })}
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
      <style jsx>
        {`
          ._image {
            background-image: url('https://picsum.photos/200/300');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </>
  )
}

export default Navbar