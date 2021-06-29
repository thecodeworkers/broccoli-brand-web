import React, { useEffect, useState } from 'react'
import { Button } from '@components'
import { addCoupon, checkoutForm, processPayment } from '@store/actions'
import { formatCurrency } from '@utils'
import { useDispatch, useSelector } from 'react-redux'
import { formikConfig } from './formik'
import styles from './styles.module.scss'

const Billing = () => {

  const { resource: { checkout: { checkout = {} }, currency, countries }, cart: { cart }, user: { checkout: userCheckout, user } } = useSelector((state: any) => state)
  const { deliveryAddressAndShipping, billingAndSummary } = checkout
  const [change, setChange] = useState(true)
  const [arrowDown, setArrowDown] = useState(false)

  const dispatch = useDispatch()
  const formik = formikConfig(dispatch)

  const { errors, touched } = formik

  const setDefaultValues = (data) => {
    if (data) for (let key in data) {
      if (key === 'address1') {
        if (data[key]) formik.setFieldValue('address_1', data[key])
        continue;
      }
      if (key === 'address2') {
        if (data[key]) formik.setFieldValue('address_2', data[key])
        continue;
      }
      if (key === 'firstName') {
        if (data[key]) formik.setFieldValue('name', `${data.firstName}${(data.lastName) ? ' ' + data.lastName : ''}`)
        continue;
      }
      if (data[key]) formik.setFieldValue(key, data[key])
    }
  }
  useEffect(() => {
    setDefaultValues(user?.billing)
  }, [user?.billing])

  useEffect(() => {
    if (formik.isValid && !Object.keys(errors).length) dispatch(checkoutForm({ 'billing': { ...formik.values, isValid: formik.isValid } }))
  }, [formik.isValid, formik.values.address_1, formik.values.address_2, formik.values.city, formik.values.email, formik.values.name, formik.values.phone, formik.values.postcode])

  const completeCheckout = () => {
    dispatch(processPayment())
  }

  const addC = () => {
    dispatch(addCoupon(formik.values.discountCode))
  }

  useEffect(() => {
    if (formik.values.addressSelection === 'same') {
      setDefaultValues(userCheckout?.shipping);
      setChange(false)
    }
    if (formik.values.addressSelection === 'alternative') setChange(true)
  }, [formik.values.addressSelection, userCheckout?.shipping])

  const changeArrowDown = () => {
    if(arrowDown) return setArrowDown(false)
    return setArrowDown(true)
  }

  return (
    <div className={styles._main}>
      <div className={styles._addressBox}>
        <div className={styles._shippingTitleBox}>
          <h2 className={styles._shippingTitle}>{billingAndSummary?.billingTitle}</h2>
        </div>
        <div className={styles._formBox}>
          <form onSubmit={formik.handleSubmit}>
            <div className={styles._addressSelection}>
              <label className={formik.values.addressSelection === 'same' ? [styles._radioLabelTax, styles._radioChecked].join(' ') : styles._radioLabelTax}>
                <input name="addressSelection" type="radio" className={errors.addressSelection && touched.addressSelection ? [styles._inputError, styles._radio].join(' ') : styles._radio}
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={'same'} />
                {billingAndSummary?.default}
              </label>
              <label className={formik.values.addressSelection === 'alternative' ? [styles._radioLabelTax, styles._radioChecked].join(' ') : styles._radioLabelTax}>
                <input name="addressSelection" type="radio" className={errors.addressSelection && touched.addressSelection ? [styles._inputError, styles._radio].join(' ') : styles._radio}
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={'alternative'} />
                {billingAndSummary?.alternative}
              </label>
            </div>
            <label className={errors.name && touched.name ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.nameLastname}</span>
              {deliveryAddressAndShipping?.delivery?.nameLastname}
              <input disabled={!change} id="name" name="name" type="text" className={errors.name && touched.name ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
            </label>
            <label className={errors.email && touched.email ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.email}</span>
              {deliveryAddressAndShipping?.delivery?.email}
              <input disabled={!change} id="email" name="email" type="text" className={errors.email && touched.email ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
            </label>
            <div className={styles._selectBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.country}</span>
              <label htmlFor="shippingCountry" className={styles._selectLabel}>
                {deliveryAddressAndShipping?.delivery?.country}
              </label>
              <label htmlFor="shippingCountry" className={errors.country && touched.country ? [styles._inputError, styles._customSelect].join(' ') : [styles._customSelect, arrowDown ? styles._customSelectDown : ''].join(' ')}  onClick={() => changeArrowDown()}>
                <select disabled={!change} onChange={formik.handleChange} onBlur={formik.handleBlur} name="country" id="shippingCountry" value={formik.values.country} className={styles._selectForm}>
                  {countries?.length ? countries?.map((country, index) => (
                    <option key={index} value={country.code}>{country.name}</option>
                  )) : <></>}
                </select>
              </label>
            </div>
            <label className={errors.address_1 && touched.address_1 ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.address}</span>
              {deliveryAddressAndShipping?.delivery?.address}
              <input disabled={!change} id="address_1" name="address_1" type="text" className={errors.address_1 && touched.address_1 ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address_1} />
            </label>
            <label className={errors.address_2 && touched.address_2 ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.secondAddress}</span>
              {deliveryAddressAndShipping?.delivery?.aptSuiteEtc}
              <input disabled={!change} id="secondAddress" name="address_2" type="text" className={errors.address_2 && touched.address_2 ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address_2} />
            </label>
            <label className={errors.city && touched.city ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.city}</span>
              {deliveryAddressAndShipping?.delivery?.city}
              <input disabled={!change} id="city" name="city" type="text" className={errors.city && touched.city ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} />
            </label>
            <label className={errors.postcode && touched.postcode ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.zip}</span>
              {deliveryAddressAndShipping?.delivery?.postalCode}
              <input disabled={!change} id="zip" name="postcode" type="text" className={errors.postcode && touched.postcode ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.postcode} />
            </label>
            <label className={errors.phone && touched.phone ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.phone}</span>
              {deliveryAddressAndShipping?.delivery?.phone}
              <input disabled={!change} id="phone" name="phone" type="text" className={errors.phone && touched.phone ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
            </label>
          </form>
        </div>
      </div>
      <div className={styles._selectionBox}>
        <div className={styles._shippingBox}>
          <div className={styles._shippingTitleBox}>
            <p className={styles._shippingTitle}>
              {billingAndSummary?.summaryTitle}
            </p>
          </div>
          <div className={styles._formBox}>
            <form>
              <div className={styles._discountBox}>
                <div className={styles._discountInput}>
                  <label className={errors.discountCode && touched.discountCode ? [styles._inputError, styles._inputBox, styles._inputDiscount].join(' ') : [styles._inputBox, styles._inputDiscount].join(' ')}>
                    <span className={styles._tooltip}>{billingAndSummary?.tooltips?.discountCode}</span>
                    {billingAndSummary?.discountCode}
                    <input id="discountCode" name="discountCode" type="text" className={errors.discountCode && touched.discountCode ? [styles._inputError, styles._input].join(' ') : styles._input}
                      onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.discountCode} />
                  </label>
                </div>
                <div className={styles._discountButton}>
                  <Button text={billingAndSummary?.applyButton} borderColor='black' colorText='black' blackHover={true} onClick={() => addC()} type={'button'} />
                </div>
              </div>
            </form>
            <div className={styles._informationBox}>
              <p className={styles._informationText}>{billingAndSummary?.totalItems} <span>{formatCurrency(currency, cart?.contentsTotal)}</span></p>
              <p className={styles._informationText}>{billingAndSummary?.shipping} <span>{formatCurrency(currency, cart?.shippingTotal)}</span></p>
              <p className={styles._informationText}>{billingAndSummary?.taxesFees} <span>{formatCurrency(currency, cart?.feeTotal)}</span></p>
              <p className={styles._informationText}>{billingAndSummary?.discount} <span>{formatCurrency(currency, cart?.discountTotal)}</span></p>
              <p className={[styles._informationText, styles._totalBilling].join(' ')}>{billingAndSummary?.orderTotal} <span>{formatCurrency(currency, cart?.total)}</span></p>
              <p className={styles._informationText}>{billingAndSummary?.taxesDescription}</p>
              <p className={styles._informationText}>{billingAndSummary?.payAccept}</p>
              <div className={styles._buttonBox}>
                <div className={styles._discountButton}>
                  <Button onClick={completeCheckout} disabled={(!userCheckout?.shipping?.isValid || !userCheckout?.billing?.isValid) || !userCheckout?.payment?.isValid} text={billingAndSummary?.payButton} borderColor='white' colorText='white' />
                </div>
                <p className={styles._payTime}>
                  {billingAndSummary?.payTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billing
