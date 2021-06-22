import { checkoutForm } from '@store/actions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formikConfig } from './formik'
import { formikAccountConfig } from './formikAccount'
import styles from './styles.module.scss'

const Shipping = ({ data = null }) => {

  const { resource: { checkout: { checkout = {} } } } = useSelector((state: any) => state)
  const { deliveryAddressAndShipping } = checkout

  const dispatch = useDispatch()
  const formik = formikConfig(dispatch)
  const formikAccount = formikAccountConfig(dispatch)

  const { errors, touched } = formik

  useEffect(() => {
    if ((formik.isValid && formikAccount.isValid) && (!Object.keys(errors).length && !Object.keys(formikAccount.errors).length)) dispatch(checkoutForm({ 'shipping': { ...formik.values, isValid: formik.isValid }, 'account': { ...formikAccount.values } }))
  }, [formik.isValid, formikAccount.isValid])

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
                <option value={'VE'}>{'Venezuela'}</option>
                <option value={'MX'}>{'Mexico'}</option>
                <option value={'EEUU'}>{'Estados Unidos'}</option>
                <option value={'PN'}>{'Panama'}</option>
              </select>
            </label>
          </div>
          <label className={errors.address && touched.address ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
            <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.address}</span>
            {deliveryAddressAndShipping?.delivery?.address}
            <input id="addressShipping" name="address" type="text" className={errors.address && touched.address ? [styles._inputError, styles._input].join(' ') : styles._input}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} />
          </label>
          <label className={errors.secondAddress && touched.secondAddress ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
            <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.secondAddress}</span>
            {deliveryAddressAndShipping?.delivery?.aptSuiteEtc}
            <input id="secondAddressShipping" name="secondAddress" type="text" className={errors.secondAddress && touched.secondAddress ? [styles._inputError, styles._input].join(' ') : styles._input}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.secondAddress} />
          </label>
          <label className={errors.city && touched.city ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
            <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.city}</span>
            {deliveryAddressAndShipping?.delivery?.city}
            <input id="cityShipping" name="city" type="text" className={errors.city && touched.city ? [styles._inputError, styles._input].join(' ') : styles._input}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} />
          </label>
          <label className={errors.zip && touched.zip ? [styles._inputError, styles._inputBox].join(' ') : styles._inputBox}>
            <span className={styles._tooltip}>{deliveryAddressAndShipping?.delivery?.tooltips?.zip}</span>
            {deliveryAddressAndShipping?.delivery?.postalCode}
            <input id="zipShipping" name="zip" type="text" className={errors.zip && touched.zip ? [styles._inputError, styles._input].join(' ') : styles._input}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.zip} />
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
