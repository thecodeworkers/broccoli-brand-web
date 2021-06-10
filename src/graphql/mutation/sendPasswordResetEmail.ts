const sendPasswordResetEmail = ({email}) => {
  return (`
      sendPasswordResetEmail(input: {
        username: "${email}"
      }) {
        user {
          email
        }
      }
  `)
}

export default sendPasswordResetEmail
