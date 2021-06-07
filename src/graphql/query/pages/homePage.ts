
import { homeId } from '@utils/pageIds'

const home = (language) => `
homePage: page(id: "${homeId}") {
  translation(language: ${language}) {
    home {
      bannerPrincipal {
        firstButtonLink
        firstTextButton
        firstTitleButton
        secondButtonLink
        secondTextButton
        secondTitleButton
        banner {
          image {
            mediaItemUrl
            slug
          }
          responsiveImage {
            mediaItemUrl
            slug
          }
        }
      }
      brand {
        bottomImage {
          mediaItemUrl
          slug
        }
        topImage {
          mediaItemUrl
          slug
        }
      }
      contact {
        title
        image {
          mediaItemUrl
          slug
        }
        textButton
        name
        phone
        orderNumber
        email
        message
        category {
          title
          fields {
            text
          }
        }
        subject {
          title
          fields {
            text
          }
        }
      }
      outstanding {
        title
        linkButton
        textButton
      }
      webPromotion {
        description
        title
        textButton
        linkButton
        image {
          slug
          mediaItemUrl
        }
      }
    }
    id
  }
}
`

export default home

