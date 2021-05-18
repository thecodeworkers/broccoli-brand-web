import React from 'react';
import styles from './styles.module.scss';
import { Instagram, Whatsapp, Twitter } from '@images/svg';

const Footer = () => {

	return (
		<section className={styles._footerContainer}>
         <div className={[styles._footerSection, styles._section11].join(" ")}>
            <div className={styles._textContainer}>
               <p className={styles._whiteText}><strong>LOCATION</strong></p>
               <p className={styles._whiteText}>puebla 403, suite 213, colonia roma norte delegación cuauhtémoc,código postal 06700 ciudad de méxico</p>
            </div>
         </div>
         <div className={[styles._footerSection, styles._section11].join(" ")}>
            <div className={styles._textContainer}>
               <p className={styles._whiteText}><strong>PHONES</strong></p>
               <p className={styles._whiteText}>MX.          <strong>+52 56 1689 9488</strong></p>
            </div>
         </div>
         <div className={[styles._footerSection, styles._section13].join(" ")}>
            <div className={styles._textContainer}>
               <p className={styles._whiteText}><strong>HORARIOS (DE ATENCIÓN)</strong></p>
               <p className={styles._whiteText}>Lunes - Sábado</p>
               <p className={styles._whiteText}>10AM - 5PM</p>
            </div>
         </div>
         <div className={[styles._footerSection, styles._section11].join(" ")}>
            <div className={styles._textContainer}>
               <p className={styles._whiteText}><strong>Email</strong></p>
               <p className={styles._whiteText}>ecommerce@brocolibrand.com</p>
            </div>
         </div>
         <div className={[styles._footerSection,  styles._section11].join(" ")}>
            <div className={styles._textFormContainer}>
               <p className={styles._whiteText}><strong>JOIN OUR MAILING LIST AND RECEIVE UPDATES</strong></p>
               <div className={styles._formContainer}>
                  <input type="text" placeholder="Enter email to suscribe"/>
                  <button className={styles._formButton}>SUSCRIBE</button>
               </div>
            </div>
         </div>
         <div className={[styles._footerSection, styles._section13].join(" ")}>
            <div className={styles._textContainer}>
               <p className={[styles._grayText, styles._marginBottom].join(" ")}>Política de privacidad</p>
               <p className={styles._grayText}>Términos y condiciones </p>
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
            <div className={styles._iconMargin}><Instagram /></div>
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
	)
}

export default Footer;
