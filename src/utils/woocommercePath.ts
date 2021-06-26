import { fallbackRootUrl } from './path'

const url = process.env.NEXT_PUBLIC_WP_ROOT_API_URL || fallbackRootUrl

export const rootPath = `${url}/wp-json/wc`
const version3 = 'v3'

export const customerPath = `${rootPath}/${version3}/customer`
