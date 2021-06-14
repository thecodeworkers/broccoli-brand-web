import React, { useState } from 'react'
import styles from './styles.module.scss'
import { BroccoliLogo } from '@images/components'
import { World, Coin, Bag, User, Pipe, Arrow } from '@images/svg'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage, logout, openModal, setLoader } from '@store/actions'
import { useRouter } from 'next/router'
import { NavbarResponsive } from '@components'
import { createMarkup } from '@utils';
const Navbar = () => {

  const dispatch = useDispatch()
  const router = useRouter()
  const [down, setDown] = useState(false)
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
                  <div className={styles._dropdownUser} onClick={() => setDown(!down)}>
                    <div className={[styles._topText, styles._rightMargin].join(" ")}>hi! {user.user?.firstName}<span className={styles._arrowUser}><Arrow /></span></div>
                    {down ? (
                      <div className={styles._dropdownUserMenu}>
                        <p className={styles._dropdownUserItem} onClick={() => { modal('changePassword') }}>Change Password</p>
                        <p className={styles._dropdownUserItem}>Profile</p>
                      </div>
                    ) : null}

                  </div>

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
                  {general?.navigationBar?.dropdownMenu?.columnList.map((item, index) => (
                    <div className={styles._listColum} key={index}>
                      <div dangerouslySetInnerHTML={createMarkup(item.list)}></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles._halfCategories}>
                <div className={styles._imageCategories}>
                  <div className={styles._imageContainer}>
                    <div className='_image'></div>
                  </div>
                  <div className={styles._imageDescription}>
                    <p className={styles._subText}>{general?.navigationBar?.dropdownMenu?.year}</p>
                    <p className={styles._subText}>{general?.navigationBar?.dropdownMenu?.collection}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className={styles._bottomSectionsContainer}>
            <div className={styles._bottomSections}>
              {general?.navigationBar?.navigation?.map((nav, index) => (
                <div onClick={() => navigation(nav.link, true)} key={index}
                  className={styles._bottomSection}
                  onMouseEnter={index == 2 ? () => setShowCat(true) : () => setShowCat(false)}
                  onMouseLeave={index == 2 ? () => setShowCat(false) : () => setShowCat(false)}
                >
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
      <style jsx>
        {`
          ._image {
            background-image: url(${general?.navigationBar?.dropdownMenu?.image?.mediaItemUrl});
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