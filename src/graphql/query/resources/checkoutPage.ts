import { checkoutId } from '@utils/pageIds'
const checkout = (language) => `
checkoutPage: page(id: "${checkoutId}") {
  translation(language: ${language}) {
    checkout {
      bag {
        bagTitle
        checkoutButton
        items
        noItems
        remove
        subtotal
        table {
          cantidad
          orderSummary
          price
        }
        total
      }
      billingAndSummary {
        totalItems
        taxesFees
        taxesDescription
        summaryTitle
        shipping
        payButton
        payAccept
        orderTotal
        discountCode
        billingTitle
        default
        applyButton
        alternative
        tooltips {
          discountCode
        }
      }
      deliveryAddressAndShipping {
        taxesTitle
        shippingTitle
        delivery {
          address
          city
          aptSuiteEtc
          country
          email
          phone
          nameLastname
          postalCode
          titleDelivery
          tooltips {
            zip
            secondAddress
            phone
            nameLastname
            fieldGroupName
            email
            country
            city
            address
          }
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
        tooltips {
          year
          securityCode
          nameCard
          month
          cardNumber
        }
      }
    }
  }
}
`

export default checkout;