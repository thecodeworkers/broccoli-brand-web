const products = (language) => `
products(first: 10000000) {
  nodes {
    id
    name
    slug
    status
    type
    databaseId
    date
    productCategories {
      nodes {
        translations {
          translation(language: ${language}) {
            id
            name
            slug
          }
        }
      }
    }
    productData{
      outstandingCollection
    }
    image {
      mediaItemUrl
    }
    attributes {
      nodes {
        name
        options
      }
    }
    ... on SimpleProduct {
      price
      stockQuantity
      totalSales
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
}
`

export default products;