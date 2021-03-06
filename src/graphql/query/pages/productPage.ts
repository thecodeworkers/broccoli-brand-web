const product = (id) => `
productPage:product(id: "${id}") {
  id
  name
  description
  shortDescription
  sku
  slug
  databaseId
  productData{
    outstandingCollection
    allColors {
      color
      image {
        mediaItemUrl
      }
    }
  }
  productCategories {
    nodes {
      id
      name
      slug
    }
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
    upsell {
      nodes {
        id
        name
        image {
          mediaItemUrl
        }
        attributes {
          nodes {
            options
          }
        }
      }
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
    upsell {
      nodes {
        id
        name
        image {
          mediaItemUrl
        }
        attributes {
          nodes {
            options
          }
        }
      }
    }
  }
}
`

export default product;