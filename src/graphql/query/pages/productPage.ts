const product = (id) => `
productPage:product(id: "${id}") {
  id
  name
  description
  shortDescription
  sku
  slug
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
    id
    name
    galleryImages {
      nodes {
        mediaItemUrl
      }
    }
    price
    regularPrice
  }
}
`

export default product;