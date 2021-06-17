import { authId } from '@utils/pageIds'

const sendEmail = ({ body, subject }) => {
  return (`
  sendEmail(input: {body: "${body}", subject: "${subject}", clientMutationId: "${authId}"}) {
    message
    origin
    replyTo
    sent
    to
  }
  `)
}

export default sendEmail
