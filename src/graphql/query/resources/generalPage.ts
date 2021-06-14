import { generalId } from '@utils/pageIds'
const general = (language) => `
generalPage: page(id: "${generalId}") {
  translation(language: ${language}) {
    general {
      navigationBar {
        login
        register
        carText
        logout
        navigation {
          text
          link
        }
      }
      clauses {
        termsTitle
        termsLink
        politicTitle
        politicLink
      }
      schedules
      phones
      newsletter
      location
      email
      socialMedia {
        icon {
          mediaItemUrl
        }
        link
      }
    }
  }
}
`

export default general;