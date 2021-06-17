
const attributes = (language) => `
attributes {
  nodes {
    translation(language: ${language}) {
      id
      title
      atData {
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