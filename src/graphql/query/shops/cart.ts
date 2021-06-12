
const cart = () => `
cart {
  total
  totalTax
  subtotal
  subtotalTax
  shippingTotal
  shippingTax
  discountTax
  discountTotal
  contentsTax
  contentsTotal
  needsShippingAddress
  isEmpty
  availableShippingMethods {
    rates {
      id
      label
    }
    supportsShippingCalculator
  }
  chosenShippingMethods
  contents(first: 1000000) {
    itemCount
    nodes {
      key
      product {
        node { 
          name
          slug
          status
          sku
          ... on SimpleProduct {
            id
            name
            salePrice(format: RAW)
            price(format: RAW)
          }
          attributes(first: 100000) {
            nodes {
              id
              label
              name
              options
              position
              variation
            }
          }
          image {
            mediaItemUrl
            slug
          }
        }
      }
      quantity
      subtotal
      subtotalTax
      tax
      total
    }
  }
  totalTaxes {
    label
    id
    amount
  }
  fees {
    name
    amount
    taxClass
    total
    taxable
  }
}
`

export default cart;