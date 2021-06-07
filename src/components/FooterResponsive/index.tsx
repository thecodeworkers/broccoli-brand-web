import React, { useState } from 'react'
import styles from './styles.module.scss'
import { createMarkup } from '@utils';
import { Instagram, Whatsapp, Twitter } from '@images/svg';

const FooterResponsive = (data) => {

  const { data: general } = data
  
  return (
    <>
    <footer className={styles._responsiveContainer}>
      <section className={styles._locationContainer}>
        <div className={styles._infoContainer}>
          <div className={styles._location} dangerouslySetInnerHTML={createMarkup(general.location)}></div>
        </div>
      </section>
      <section className={styles._contactContainer}>
        <div className={styles._infoContainer}>
          <div className={styles._schedulesContainer}>
            <div dangerouslySetInnerHTML={createMarkup(general.phones)}></div>
            <div dangerouslySetInnerHTML={createMarkup(general.schedules)}></div>
          </div>
        </div>
      </section>
      <section className={styles._principalFormContainer}>
        <div className={styles._infoContainer}>
          <div className={styles._email} dangerouslySetInnerHTML={createMarkup(general.email)}></div>
          <div className={styles._newsletter}>
            <div dangerouslySetInnerHTML={createMarkup(general.newsletter)}></div>
            <div className={styles._formContainer}>
            <input type="text" placeholder="Enter email to suscribe" />
            <button className={styles._formButton}>SUSCRIBE</button>
          </div>
          </div>
        </div>
      </section>
      <section className={styles._socialContainer}>
        <div className={styles._infoContainer}>
          <div className={styles._internNavigation}>
            <a href={general.navigationBar.navigation[0].link}>
              <p className={[styles._whiteText, styles._textMargin].join(" ")}>{general.navigationBar.navigation[0].text}</p>
            </a>
            <a href={general.navigationBar.navigation[1].link}>
              <p className={[styles._whiteText, styles._textMargin].join(" ")}>{general.navigationBar.navigation[1].text}</p>
            </a>
            <a href={general.navigationBar.navigation[2].link}>
              <p className={[styles._whiteText, styles._textMargin].join(" ")}>{general.navigationBar.navigation[2].text}</p>
            </a>
            <a href={general.navigationBar.navigation[3].link}>
              <p className={[styles._whiteText, styles._textMargin].join(" ")}>{general.navigationBar.navigation[3].text}</p>
            </a>
          </div>
          <div className={styles._socialMedia}>
            <div className={styles._iconMargin}><a href={general.socialMedia[0].link}><Instagram /></a></div>
            <div className={styles._iconMargin}><Twitter /></div>
            <div className={styles._iconMargin}><Whatsapp /></div>
          </div>
          <div className={styles._copyright}>
            <p>Copyright © Broccoli Brand</p>
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
      </section>
    </footer>
    </>
  )
}

export default FooterResponsive;
