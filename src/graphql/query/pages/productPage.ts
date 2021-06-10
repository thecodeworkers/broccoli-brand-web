const product = (id) => `
productPage:product(id: "${id}") {
  image {
    mediaItemUrl
    title
    slug
  }
  attributes {
    nodes {
      name
      options
      variation
    }
  }
  galleryImages {
    nodes {
      mediaItemUrl
    }
  }
}
`

export default product;