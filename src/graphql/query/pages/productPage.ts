const product = (id) => `
productPage:simpleProduct(id: "${id}") {
  name
  regularPrice
  description
  shortDescription
  price
  image {
    mediaItemUrl
  }
  galleryImages {
    nodes {
      mediaItemUrl
    }
  }
  attributes {
    nodes {
      name
      options
    }
  }
}
`

export default product;