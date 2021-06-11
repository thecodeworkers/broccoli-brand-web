const products = () => `
products(first: 10000000) {
  nodes {
    id
    name
    slug
    status
    type
    databaseId
    image {
      mediaItemUrl
    }
    attributes {
      nodes {
        name
        options
      }
    }
  }
}
`

export default products;