import { checkoutForm, putFee, setLoader, updateShipping } from '@store/actions'
import { filter } from '@utils'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formikConfig } from './formik'
import styles from './styles.module.scss'

const Shipping = () => {

  const { resource: { checkout: { checkout = {} }, countries }, cart: { cart }, user: { user } } = useSelector((state: any) => state)
  const { deliveryAddressAndShipping } = checkout

  const dispatch = useDispatch()
  const router = useRouter()
  const formik = formikConfig(dispatch)

  const { errors, touched } = formik

  const setDefaultValues = () => {
    if (user?.shipping) for (let key in user.shipping) {
      if (key === 'address1') {
        if (user?.shipping[key]) formik.setFieldValue('address_1', user?.shipping[key])
        continue;
      }
      if (key === 'address2') {
        if (user?.shipping[key]) formik.setFieldValue('address_2', user?.shipping[key])
        continue;
      }
      if (key === 'firstName') {
        if (user?.shipping[key]) formik.setFieldValue('name', `${user?.shipping?.firstName}${(user?.shipping?.lastName) ? ' ' + user?.shipping?.lastName : ''}`)
        continue;
      }
      if (user?.shipping[key]) formik.setFieldValue(key, user?.shipping[key])
    }
  }

  useEffect(() => {
    setDefaultValues()
  }, [user.shipping])

  useEffect(() => {
    if (cart?.chosenShippingMethods) {
      formik.setFieldValue('shippingMethod', cart?.chosenShippingMethods[0])

    }
  }, [cart?.chosenShippingMethods])

  useEffect(() => {
    if (checkout?.fees) {
      if (formik.values.taxMethod !== checkout?.fees[0].label) {
        formik.setFieldValue('taxMethod', checkout?.fees[0].label)
        fee(true, checkout?.fees[0].label, checkout?.fees[0].amount)
      }
    }
  }, [checkout?.fees])

  useEffect(() => {
    if (cart?.contents) {
      if (!cart?.contents?.itemCount) {
        dispatch(setLoader(true))
        router.push('/shop')
      }
    }
  }, [cart?.contents])

  useEffect(() => {
    if (formik.isValid && !Object.keys(errors).length) dispatch(checkoutForm({ 'shipping': { ...formik.values, isValid: formik.isValid } }))
  }, [formik.isValid, formik.values.address_1, formik.values.address_2, formik.values.city, formik.values.email, formik.values.name, formik.values.phone, formik.values.postcode])

  const getTitle = (key) => {
    if (checkout?.shippingMethods) {
      const filt = filter(checkout?.shippingMethods, key, 'slug')
      return filt[0]?.label
    }
  }

  const shipping = (checked, id) => {
    if (checked) dispatch(updateShipping(id))
  }

  const fee = (checked, label, amount) => {
    if (checked) dispatch(putFee(label, amount))
  }

  return (
    <div className={styles._main}>
      <div className={styles._addressBox}>
        <div className={styles._shippingTitleBox}>
          <h2 className={styles._shippingTitle}>{deliveryAddressAndShipping?.delivery?.titleDelivery}</h2>
        </div>
        <div className={styles._formBox}>

          <form onSubmit={formik.handleSubmit}>
            <label className={errors.name && touched.name ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.nameLastname}</span>
              {deliveryAddressAndShipping?.delivery?.nameLastname}
              <input id="nameShipping" name="name" type="text" className={errors.name && touched.name ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
            </label>
            <label className={errors.email && touched.email ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.email}</span>
              {deliveryAddressAndShipping?.delivery?.email}
              <input id="emailShipping" name="email" type="text" className={errors.email && touched.email ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
            </label>
            <div className={styles._selectBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.country}</span>
              <label htmlFor="country" className={styles._selectLabel}>
                {deliveryAddressAndShipping?.delivery?.country}
              </label>
              <label htmlFor="country" className={errors.country && touched.country ? [styles._inputError, styles._customSelect].join(' ') : styles._customSelect}>
                <select onChange={formik.handleChange} onBlur={formik.handleBlur} name="country" id="countryShipping" value={formik.values.country} className={styles._selectForm}>
                  {countries?.length ? countries?.map((country, index) => (
                    <option key={index} value={country.code}>{country.name}</option>
                  )) : <></>}
                </select>
              </label>
            </div>
            <label className={errors.address_1 && touched.address_1 ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.address}</span>
              {deliveryAddressAndShipping?.delivery?.address}
              <input id="addressShipping" name="address_1" type="text" className={errors.address_1 && touched.address_1 ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address_1} />
            </label>
            <label className={errors.address_2 && touched.address_2 ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.secondAddress}</span>
              {deliveryAddressAndShipping?.delivery?.aptSuiteEtc}
              <input id="secondAddressShipping" name="address_2" type="text" className={errors.address_2 && touched.address_2 ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address_2} />
            </label>
            <label className={errors.city && touched.city ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.city}</span>
              {deliveryAddressAndShipping?.delivery?.city}
              <input id="cityShipping" name="city" type="text" className={errors.city && touched.city ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} />
            </label>
            <label className={errors.postcode && touched.postcode ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.zip}</span>
              {deliveryAddressAndShipping?.delivery?.postalCode}
              <input id="zipShipping" name="postcode" type="text" className={errors.postcode && touched.postcode ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.postcode} />
            </label>
            <label className={errors.phone && touched.phone ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.phone}</span>
              {deliveryAddressAndShipping?.delivery?.phone}
              <input id="phoneShipping" name="phone" type="text" className={errors.phone && touched.phone ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
            </label>
          </form>
        </div>
      </div>
      <div className={styles._selectionBox}>
        <div className={styles._shippingBox}>
          <div className={styles._shippingTitleBox}>
            <p className={styles._shippingTitle}>
              {deliveryAddressAndShipping?.shippingTitle}
            </p>
          </div>
          <div className={styles._shippingContent}>
            <div className={styles._radioBox}>
              {(cart?.availableShippingMethods) && cart?.availableShippingMethods[0]?.rates?.map((method, index) => (
                <label key={index} className={formik.values.shippingMethod === method.id ? [styles._radioLabel, styles._radioChecked, styles._method].join(' ') : [styles._radioLabel, styles._method].join(" ")}>
                  <input defaultChecked={formik.values.shippingMethod === cart?.chosenShippingMethods[0]} name="shippingMethod" type="radio" className={errors.shippingMethod && touched.shippingMethod ? [styles._inputError, styles._radio].join(' ') : styles._radio}
                    onChange={formik.handleChange} onBlur={formik.handleBlur} onClick={(event) => shipping(event.currentTarget.checked, method.id)} value={method.id} />
                  {getTitle(method.label)}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className={styles._taxesBox}>
          <div className={styles._shippingTitleBox}>
            <p className={styles._shippingTitle}>
              {deliveryAddressAndShipping?.taxesTitle}
            </p>
          </div>
          <div className={styles._shippingContent}>
            {checkout?.fees?.map((value, index) => (
              <label key={index} className={formik.values.taxMethod === value?.label ? [styles._radioLabelTax, styles._radioChecked].join(' ') : styles._radioLabelTax}>
                <input name="taxMethod" type="radio" className={errors.taxMethod && touched.taxMethod ? [styles._inputError, styles._radio].join(' ') : styles._radio}
                  onChange={formik.handleChange} onBlur={formik.handleBlur} onClick={(check) => fee(check.currentTarget.checked, value?.label, value?.amount || 0)} value={value?.label} />
                <p className={styles._simpleText}>{value?.label}</p>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shipping
