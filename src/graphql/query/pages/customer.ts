const customer = (id) => `
userData: orders(first: 1000000) {
  nodes {
    id
    orderNumber
    total
    subtotal
    status
    shippingTotal
    date
    transactionId
    needsPayment
    lineItems {
      nodes {
        product {
          id
          name
          image {
            mediaItemUrl
            slug
          }
          attributes {
            nodes {
              label
              name
              options
            }
          }
          ... on SimpleProduct {
            price
          }
          ... on VariableProduct {
            price
            stockQuantity
            totalSales
            variations(first: 100000) {
              nodes {
                id
                databaseId
                manageStock
                price
                stockQuantity
                name
                attributes(first: 100000) {
                  nodes {
                    id
                    name
                    value
                  }
                }
              }
            }
          }
        }
        total
        quantity
      }
    }
  }
}
`

export default customer

