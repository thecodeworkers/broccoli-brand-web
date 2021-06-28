import { checkoutForm } from '@store/actions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formikConfig } from './formik'
import { formikAccountConfig } from './formikAccount'
import styles from './styles.module.scss'

const Shipping = ({ data = null }) => {

  const { resource: { checkout: { checkout = {} }, countries }, user: { user } } = useSelector((state: any) => state)
  const { deliveryAddressAndShipping } = checkout

  const dispatch = useDispatch()
  const formik = formikConfig(user.shipping)
  const formikAccount = formikAccountConfig(dispatch)

  const { errors, touched } = formik

  const setDefaultValues = () => {
    if (user?.shipping) for (let key in user.shipping) {
      if (key === 'address1') {
        formik.setFieldValue('address_1', user?.shipping[key])
        continue;
      }
      if (key === 'address2') {
        formik.setFieldValue('address_2', user?.shipping[key])
        continue;
      }
      if (key === 'firstName') {
        formik.setFieldValue('name', `${user?.shipping?.firstName}${(user?.shipping?.lastName) ? ' ' + user?.shipping?.lastName : ''}`)
        continue;
      }
      formik.setFieldValue(key, user?.shipping[key])
    }
  }

  useEffect(() => {
    setDefaultValues()
  }, [user?.shipping])

  useEffect(() => {
    if ((formik.isValid && formikAccount.isValid) && (!Object.keys(errors).length && !Object.keys(formikAccount.errors).length)) dispatch(checkoutForm({ 'shipping': { ...formik.values, isValid: formik.isValid }, ...formikAccount.values }))
  }, [formik.isValid, formikAccount.isValid, formik.values.address_1, formik.values.address_2, formik.values.city, formik.values.email, formik.values.name, formik.values.phone, formik.values.postcode])

  return (
    <div className={styles._main}>

      <div className={styles._addressBox}>
        <div className={styles._shippingTitleBox}>
          <h2 className={styles._shippingTitle}>{deliveryAddressAndShipping?.delivery?.titleDelivery}</h2>
        </div>
        <div className={styles._formBox}>
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
              <select onChange={formik.handleChange} onBlur={formik.handleBlur} name="country" id="countryShipping" defaultValue={formik.values.country} className={styles._selectForm}>
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
        </div>
      </div>
      <div className={styles._selectionBox}>
        <div className={styles._shippingBox}>
          <div className={styles._shippingTitleBox}>
            <p className={styles._shippingTitle}>
              {data?.userInformation}
            </p>
          </div>
          <div className={styles._formBox}>
            <label className={formikAccount.errors.name && formikAccount.touched.name ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.nameLastname}</span>
              {deliveryAddressAndShipping?.delivery?.nameLastname}
              <input id="nameInfo" name="name" type="text" className={formikAccount.errors.name && formikAccount.touched.name ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formikAccount.handleChange} onBlur={formikAccount.handleBlur} value={formikAccount.values.name} />
            </label>
            <label className={formikAccount.errors.email && formikAccount.touched.email ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
              <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.email}</span>
              {deliveryAddressAndShipping?.delivery?.email}
              <input id="emailInfo" name="email" type="text" className={formikAccount.errors.email && formikAccount.touched.email ? [styles._inputError, styles._input].join(' ') : styles._input}
                onChange={formikAccount.handleChange} onBlur={formikAccount.handleBlur} value={formikAccount.values.email} />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shipping
