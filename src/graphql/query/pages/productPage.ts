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
    price
    regularPrice
    galleryImages {
      nodes {
        mediaItemUrl
      }
    }
    crossSell {
      nodes {
        id
        name
        attributes {
          nodes {
            id
            name
            options
          }
        }
        image {
          mediaItemUrl
        }
      }
    }
  }
}
`

export default product;