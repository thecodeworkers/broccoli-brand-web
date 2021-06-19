
const attributes = (language) => `
attributes {
  nodes {
    translation(language: ${language}) {
      id
      title
      atData {
        showOptions
        item {
          name
          slug
        }
      }
    }
  }
}
`

export default attributes;