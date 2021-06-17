import React from 'react';
import styles from './styles.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { createMarkup, scrolling } from '@utils';
import FooterResponsive from '../FooterResponsive';
import { useRouter } from 'next/router';
import { setLoader } from '@store/actions'

const Footer = ({reference}: any = '') => {
  const { resource: { general: { general } } } = useSelector((state: any) => state)
  const router = useRouter();
  const dispatch = useDispatch()

  const navigation = (route, loader = false) => {
    if (router.pathname != route) {
      if (loader) dispatch(setLoader(true))
      router.push(route)
    }
  }

  return general ? (
    <>
    <footer className={styles._footerContainer}>
      <div className={[styles._footerSection, styles._section11, styles._styleText].join(" ")}>
        <div className={styles._textContainer} dangerouslySetInnerHTML={createMarkup(general.location)}>
        </div>
      </div>
      <div className={[styles._footerSection, styles._section11, styles._styleText].join(" ")}>
        <div className={styles._textContainer} dangerouslySetInnerHTML={createMarkup(general.phones)}>
        </div>
      </div>
      <div className={[styles._footerSection, styles._section13, styles._styleText].join(" ")}>
        <div className={styles._textContainer} dangerouslySetInnerHTML={createMarkup(general.schedules)}>
        </div>
      </div>
      <div className={[styles._footerSection, styles._section11, styles._styleText].join(" ")}>
        <div className={styles._textContainer} dangerouslySetInnerHTML={createMarkup(general.email)}>
        </div>
      </div>
      <div className={[styles._footerSection, styles._section11].join(" ")}>
        <div className={styles._textFormContainer}>
          <div className={styles._styleText} dangerouslySetInnerHTML={createMarkup(general.newsletter)}></div>
          <div className={styles._formContainer}>
            <input type="text" placeholder="Enter email to suscribe" />
            <button className={styles._formButton}>SUSCRIBE</button>
          </div>
        </div>
      </div>
      <div className={[styles._footerSection, styles._section13].join(" ")}>
        <div className={styles._textContainer}>
          <a href={general.clauses.termsLink}>
            <p className={[styles._grayText, styles._marginBottom].join(" ")}>{general.clauses.politicTitle}</p>
          </a>
          <a href={general.clauses.politicLink}>
            <p className={styles._grayText}>{general.clauses.termsTitle}</p>
          </a>
        </div>
      </div>
      <div className={[styles._footerSection, styles._bottomSection].join(" ")}>
        <div className={styles._bottomItem}>
          {
            general.navigationBar?.navigation?.map((nav, index) => {
              if(index != 3) {
                return (
                  <div onClick={() => navigation(nav.link, true)} key={index} className={[styles._whiteText, styles._textMargin].join(" ")}>
                    <p>{nav.text}</p>
                  </div>
                )
              }

              if(router.pathname == '/about-us' || router.pathname == '/') {
                return (
                  <a key={index} onClick={() => scrolling(reference, 100)} className={[styles._whiteText, styles._textMargin].join(" ")}>
                    <p>{nav.text}</p>
                  </a>
                )
              } else {
                return (
                  <div key={index} onClick={() => navigation('/#contact-us', true)} className={[styles._whiteText, styles._textMargin].join(" ")}>
                    <p>{nav.text}</p>
                  </div>
                )
              }
            })
          }
        </div>
      </div>
      <div className={[styles._footerSection, styles._bottomSocial].join(" ")}>
        {
          general.socialMedia?.map((item, index) => (
            <div key={index} className={styles._iconMargin}>
              <a href={item.link} target='_blank'><img src={item?.icon?.mediaItemUrl} /></a>
            </div>
          ))
        }
      </div>
      <div className={[styles._footerSection, styles._bottomCopy].join(" ")}>
        <div className={styles._bottomCopyItem}>
          <div className={styles._copy}>
            <p className={[styles._grayText, styles._noMargin].join(" ")}>Copyright © Broccoli Brand</p>
          </div>
          <div className={styles._logos}>
            <div className={styles._logo}>
              <a href='https://www.thecodeworkers.com' target='_blank'>
                <img src='images/logos/tcw-logo.svg' />
              </a>
            </div>
            <div>
              <img src='images/logos/banana-logo.svg' />
            </div>
          </div>
        </div>
      </div>
    </footer>

      <div className={styles._responsive}>
        <FooterResponsive data={general} />
      </div>
    </>

  ) : null
}

export default Footer;
