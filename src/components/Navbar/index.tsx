import React from 'react'
import styles from './styles.module.scss'
import { BroccoliLogo } from '@images/components';
import { World, Coin, Bag, User, Pipe } from '@images/svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '@store/actions';
import { useRouter } from 'next/router';

const Navbar = () => {

  const dispatch = useDispatch()
  const router = useRouter()
  const { resource: { language, general: generalPage = {} } } = useSelector((state: any) => state)
  const { general } = generalPage

  const changeLang = (event) => dispatch(changeLanguage(event.target.value))

  const navigation = (route) => router.push(route)
  
  return (
    <>
      <section className={styles._container}>
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
              <div className={[styles._topText, styles._rightMargin].join(" ")}>{general?.navigationBar?.login}</div>
              <Pipe />
              <div className={styles._topText}>{general?.navigationBar?.register}</div>
            </div>
          </div>
        </section>
        <section className={styles._bottomContainer}>
          <div className={styles._bottomSectionsContainer}>
            <div className={styles._bottomSections}>
              {general?.navigationBar?.navigation?.map((nav, index) => (
                <div onClick={() => navigation(nav.link)} key={index} className={styles._bottomSection}>
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
      </section>
    </>
  )
}

export default Navbar