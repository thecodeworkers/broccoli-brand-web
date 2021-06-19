const products = () => `
products(first: 10000000) {
  nodes {
    id
    name
    slug
    status
    type
    databaseId
    productCategories {
      nodes {
        id
        name
        slug
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
  }
}
`

export default products;