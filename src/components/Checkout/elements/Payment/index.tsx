import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formikConfig } from './formik'
import styles from './styles.module.scss'
import { checkoutForm } from '@store/actions'
import { CardElement, useElements } from '@stripe/react-stripe-js';
import { cardOptions } from './options'

const Payment = () => {

  const { resource: { checkout: { checkout = {} } } } = useSelector((state: any) => state)
  const { payment } = checkout

  const dispatch = useDispatch()
  const formik = formikConfig()
  const elements = useElements();
  const [validCard, setValidCard] = useState(false)

  const { errors, touched } = formik

  const setData = () => {
    const cardElement = elements.getElement(CardElement);
    dispatch(checkoutForm({ 'payment': { ...formik.values, isValid: formik.isValid, card: cardElement } }))
  }

  useEffect(() => {
    if ((formik.isValid && validCard) && !Object.keys(errors).length) setData()
  }, [formik.isValid, validCard])

  return (
    <div className={styles._main}>
      <div className={styles._paymentBox}>
        <div className={styles._paymentTitle}>
          <h2 className={styles._title}>{payment?.title}</h2>
          <h2 className={styles._title}>{payment?.security}</h2>
        </div>
        <div className={styles._formBox}>
          <form onSubmit={formik.handleSubmit}>
            <div className={styles._formContainer}>
              <div className={styles._leftSide}>
                <label className={errors.nameCard && touched.nameCard ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
                  <span className={styles._tooltip}>{payment?.tooltips?.nameCard}</span>
                  {payment?.nameCard}
                  <input id="nameCard" name="nameCard" type="text" className={errors.nameCard && touched.nameCard ? [styles._inputError, styles._input].join(' ') : styles._input}
                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nameCard} />
                </label>
              </div>
              <div className={styles._rightSide}>
                <div className={styles._cardContainer}>
                  <CardElement options={cardOptions} onChange={(event) => setValidCard(event.complete)} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Payment
