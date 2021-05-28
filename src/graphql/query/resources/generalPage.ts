import { generalId } from '@utils/pageIds'
const general = (language) => `
generalPage: page(id: "${generalId}") {
  translation(language: ${language}) {
    general {
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
        link
        icon
      }
    }
  }
}
`

export default general;