import { alertId } from '@utils/pageIds'

const alerts = (language) => `
alerts: page(id: "${alertId}") {
  translation(language: ${language}) {
    alerts {
      successVerifiedCard
      successUpdateUser
      successUpdateShipping
      successUpdateProduct
      successUpdateFee
      successPayment
      successMailSend
      successLogin
      successLogout
      successGuest
      successForgotPassword
      successDeleteProduct
      successCreateUser
      successChangePassword
      successCancelOrder
      successAddedProduct
      successAddedCoupon
      processErrorPayment
      noStock
      loginBeforeContinue
      limitUpdateProduct
      generalError
      invalidUserForgotPassword
      expiryCardPayment
      errorVerifiedCard
      errorUpdateUser
      errorUpdateProduct
      errorUpdateShipping
      errorPayment
      errorUpdateFee
      errorMailSend
      errorLogin
      errorGuest
      errorDeleteProduct
      errorCreateUser
      errorChangePassword
      errorCancelOrder
      errorAddedProduct
      errorAddedCoupon
      declinedCardPayment
      badPasswordLogin
      badCvcPayment
    }
    id
  }
}
`

export default alerts;