const products = () => `
products(first: 10000000) {
  nodes {
    id
    name
    slug
    status
    type
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