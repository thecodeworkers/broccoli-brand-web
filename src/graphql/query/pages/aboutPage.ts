
import { aboutId } from '@utils/pageIds'

const about = (language) => `
aboutPage:page(id: "${aboutId}") {
  translation(language: ${language}) {
    id
    aboutUs {
      mainBanner {
        mediaItemUrl
        slug
      }
      brandImage {
        mediaItemUrl
        slug
      }
      shop {
        title
        description
      }
      sponsors {
        title
        sponsor {
          fullName
          description
          image {
            mediaItemUrl
            slug
          }
        }
      }
      contact {
        title
        name
        email
        phone
        orderNumber
        message
        image {
          mediaItemUrl
          slug
        }
        textButton
        subject {
          title
          fields {
            text
          }
        }
        category {
          title
          fields {
            text
          }
        }
      }
    }
  }
}
`

export default about

