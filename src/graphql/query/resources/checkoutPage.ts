import { checkoutId } from '@utils/pageIds'
const checkout = (language) => `
checkoutPage: page(id: "${checkoutId}") {
  translation(language: ${language}) {
    checkout {
      bag {
        bagTitle
        items
        table {
          price
          orderSummary
          cantidad
        }
        total
        subtotal
        remove
        checkoutButton
        noItems
      }
      billingAndSummary {
        billingTitle
        default
        alternative
        shipping
        payButton
        payAccept
        orderTotal
        discountCode
        applyButton
        summaryTitle
        taxesDescription
        totalItems
        taxesFees
      }
      deliveryAddressAndShipping {
        shippingTitle
        taxesTitle
        delivery {
          address
          aptSuiteEtc
          city
          country
          email
          nameLastname
          phone
          postalCode
          titleDelivery
        }
      }
      payment {
        year
        title
        securityCode
        security
        nameCard
        month
        expiryDate
        chooseMethod
        cardNumber
      }
    }
  }
}
`

export default checkout;