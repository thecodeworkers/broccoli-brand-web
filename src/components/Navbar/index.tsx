import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { BroccoliLogo } from '@images/components'
import { World, Coin, Bag, User, Pipe, Arrow } from '@images/svg'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrencies, changeLanguage, logout, openModal, searchProduct, setLoader } from '@store/actions'
import { useRouter } from 'next/router'
import { NavbarResponsive } from '@components'
import { createMarkup, scrolling } from '@utils';

const Navbar = ({ reference }: any = '') => {

  const dispatch = useDispatch()
  const router = useRouter()
  const [down, setDown] = useState(false)
  const { resource: { language, general: generalPage = {}, currency, currencies }, user, shop: { search: shopSearch } } = useSelector((state: any) => state)
  const { general } = generalPage
  const [path, setPath] = useState<any>()

  const [searchValue, setSearchValue] = useState(shopSearch?.text);

  const [showCat, setShowCat] = useState(false)

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

  const search = () => {
    dispatch(searchProduct(searchValue))

    if (router.pathname != 'shop') {
      dispatch(setLoader(true))
      router.push('shop')
    }
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

  useEffect(() => {
    setPath(router.pathname)
  }, [router.pathname])

  return general ? (
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
              <label htmlFor="currency" className={styles._customSelect}>
                <select name="currency" id="currency" value={currency?.iso} onChange={changeCurrency} placeholder={'Idioma'} className={[styles._topText, styles._currencySelect].join(" ")}>
                  {currencies?.map((data, index) => (<option key={index} value={data?.currencies?.iso}>{data?.currencies?.name}</option>))}
                </select>
              </label>
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
                        <p className={styles._dropdownUserItem} onClick={() => { navigation('profile', true) }}>Profile</p>
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
              {general?.navigationBar?.navigation?.map((nav, index) => {
                if (index != 3) {
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

                if (path == '/about-us' || path == '/') {
                  return (
                    <a key={index} onClick={() => scrolling(reference, 100)}
                      className={styles._bottomSection}
                      onMouseEnter={index == 2 ? () => setShowCat(true) : () => setShowCat(false)}
                      onMouseLeave={index == 2 ? () => setShowCat(false) : () => setShowCat(false)}
                    >
                      <p className={styles._bottomText}>{nav.text}</p>
                    </a>
                  )
                } else {
                  return (
                    <div key={index} onClick={() => navigation('/#contact-us', true)}
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
                <input type="text" className={styles._input} value={searchValue} onChange={(event) => setSearchValue(event.target.value)} onKeyPress={(event) => { if (event.key === 'Enter') search() }} />
                <img src='images/backgrounds/search.svg' className={styles._inputImg} onClick={() => search()} />
              </div>
            </div>
          </div>
        </section>
      </nav>

      <div className={styles._responsive}>
        <NavbarResponsive data={general} language={language} reference={reference} />
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
  ) : null
}

export default Navbar