import { authId } from '@utils/pageIds'

const refreshToken = ({ refresh }) => {
  return (`
  refreshJwtAuthToken( input: { clientMutationId: "${authId}", jwtRefreshToken: "${refresh}"}){
    authToken
  }`)
}

export default refreshToken
