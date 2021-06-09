import { recoverId } from '@utils/pageIds'

const recover = (language) => `
recoverPage: page(id: "${recoverId}") {
  translation(language: ${language}) {
    recover {
      title
      subtitle
      email
      login
      createAccount
      buttonText
      tooltips {
        email
      }
    }
    id
  }
}
`

export default recover;