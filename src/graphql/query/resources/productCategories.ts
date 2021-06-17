
const productCategories = (language) => `
productCategories {
  nodes {
    translation(language: ${language}) {
      id
      name
      slug
    }
  }
}
`

export default productCategories;