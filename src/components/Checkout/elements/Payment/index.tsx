import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formikConfig } from './formik'
import styles from './styles.module.scss'
import { checkoutForm, setLoader } from '@store/actions'
import { CardElement, useElements } from '@stripe/react-stripe-js';
import { cardOptions } from './options'
import getStripe from '@utils/getStripe'
import { Button } from '@components'


const Payment = () => {

  const { resource: { checkout: { checkout = {} } } } = useSelector((state: any) => state)
  const { payment, billingAndSummary } = checkout

  const dispatch = useDispatch()
  const formik = formikConfig()
  const elements = useElements();
  const [validCard, setValidCard] = useState(false)

  const [disabled, setDisabled] = useState(false)

  const { errors, touched } = formik

  const setData = async () => {
    if (!disabled) {
      dispatch(setLoader(true))
      const cardElement = elements.getElement(CardElement)
      const stripe = await getStripe()

      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: formik.values.nameCard,
        },
      })

      dispatch(checkoutForm({ 'payment': { ...formik.values, isValid: formik.isValid, card: paymentMethod.id } }))
      dispatch(setLoader(false))
      setDisabled(!disabled)
      return
    }
    dispatch(checkoutForm({ 'payment': { ...formik.values, isValid: false, card: '' } }))
    setDisabled(!disabled)
  }

  return (
    <div className={styles._main}>
      <div className={styles._paymentBox}>
        <div className={styles._paymentTitle}>
          <h2 className={styles._title}>{payment?.title}</h2>
          <h2 className={styles._title}>{payment?.security}</h2>
        </div>
        <div className={styles._formBox}>
          <div className={styles._formContainer}>
            <div className={styles._leftSide}>
              <label className={errors.nameCard && touched.nameCard ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
                <span className={styles._tooltip}>{payment?.tooltips?.nameCard}</span>
                {payment?.nameCard}
                <input disabled={disabled} id="nameCard" name="nameCard" type="text" className={errors.nameCard && touched.nameCard ? [styles._inputError, styles._input].join(' ') : styles._input}
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nameCard} />
              </label>
            </div>
            <div className={styles._rightSide}>
              <div className={styles._cardContainer}>
                <CardElement options={cardOptions} onChange={(event) => setValidCard(event.complete)} />
              </div>
              <div className={styles._enableButton}>
                <Button text={billingAndSummary?.applyButton} disabled={!(formik.isValid && validCard) && (!Object.keys(errors).length && touched.nameCard)} borderColor='black' colorText='black' blackHover={true} onClick={() => setData()} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
