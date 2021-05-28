import React from 'react';
import styles from './styles.module.scss';
import { Instagram, Whatsapp, Twitter } from '@images/svg';
import { useSelector } from 'react-redux';
import { createMarkup } from '@utils';

const Footer = () => {
  const { resource: { general: { general } } } = useSelector((state: any) => state)
  return general ? (
    <section className={styles._footerContainer}>
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
          <p className={[styles._grayText, styles._marginBottom].join(" ")}>{general.clauses.politicTitle}</p>
          <p className={styles._grayText}>{general.clauses.termsTitle}</p>
        </div>
      </div>
      <div className={[styles._footerSection, styles._bottomSection].join(" ")}>
        <div className={styles._bottomItem}>
          <p className={[styles._whiteText, styles._textMargin].join(" ")}>Home</p>
          <p className={[styles._whiteText, styles._textMargin].join(" ")}>About Us</p>
          <p className={[styles._whiteText, styles._textMargin].join(" ")}>Shop</p>
          <p className={[styles._whiteText, styles._textMargin].join(" ")}>Contacto</p>
        </div>
      </div>
      <div className={[styles._footerSection, styles._bottomSocial].join(" ")}>
        <div className={styles._iconMargin}><a href={general.socialMedia[0].link}><Instagram /></a></div>
        <div className={styles._iconMargin}><Twitter /></div>
        <div className={styles._iconMargin}><Whatsapp /></div>
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
    </section>
  ) : null
}

export default Footer;
