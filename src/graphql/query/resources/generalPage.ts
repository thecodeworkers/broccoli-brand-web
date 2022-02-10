import { generalId } from '@utils/pageIds'
const general = (language) => `
generalPage: page(id: "${generalId}") {
  translation(language: ${language}) {
    general {
      generalText {
        addToCartText
        viewMoreText
        individual {
          allColorsText
          alsoLikeText
          completeLookText
          selectColor
          selectSize
          sizes
          colors
        }
      }
      navigationBar {
        login
        register
        carText
        logout
        timer
        navigation {
          text
          link
        }
        dropdownMenu {
          columnList {
            list
          }
          image {
            mediaItemUrl
          }
          year
          collection
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