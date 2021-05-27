
import { aboutId } from '@utils/pageIds'

const about = (language) => `
aboutPage: page(id: "${aboutId}") {
  translation(language: ${language}) {
    aboutUs {
      title
      subtitle
      secondSubtitle
      moreInfo
      year
      content
    }
    id
    title
  }
}
`

export default about

