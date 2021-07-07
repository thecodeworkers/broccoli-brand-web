import { getResources } from '../store/actions'

export const normalizedArray = response => response ? response : []

export const normalized = response => response ? response : {}

export const actionObject = (type: string, payload = null) => ({ type, payload })

export const paginate = (items: Array<any>, page_number: number = 1, page_size: number = 15) => {
  return items?.slice((page_number - 1) * page_size, page_number * page_size);
}

export const scrollTo = (ref: any) => {
  window.scrollTo({ top: ref.offsetTop, behavior: 'smooth' });
}

export const scrolling = (ref: any, number: number = null): void => {
  if (ref) {
    const target = ref.current;
    window.scrollTo({ top: !number ? target.offsetTop : target.offsetTop - number, behavior: 'smooth' });
  }
}

export const createMarkup = (text) => { return { __html: text }; }

export const getCurrentLang = req => {
  try {
    const currentCookie = req.headers.cookie.replace(
      /(?:(?:^|.*;\s*)lang\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    return currentCookie ? currentCookie : 'ES'

  } catch {
    return 'ES'
  }
}

export const getCurrentCurrency = req => {
  try {
    const currentCookie = req.headers.cookie.replace(
      /(?:(?:^|.*;\s*)currency\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    return currentCookie ? currentCookie : 'USD'

  } catch {
    return 'USD'
  }
}


export const dispatchPage = (props, pageName) => {
  const { store, req, params } = props
  const lang = getCurrentLang(req)
  const currency = getCurrentCurrency(req)
  return store.dispatch(getResources(pageName, lang, currency, params.id))
}

export const getDate = (date) => {
  date = new Date(date)
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}

export const getHour = (date) => {
  date = new Date(date)
  const hour = (date.getHours() > 12) ? date.getHours() - 12 : date.getHours()
  const late = (date.getHours() > 12) ? 'PM' : 'AM'
  return `${hour}:${date.getMinutes()} ${late}`
}

export const setCamelCaseKey = (obj) => {
  const newObj = {}
  for (let key in obj) {
    let newKey: any = key.split('_')
    newKey = (newKey[1]) ? `${newKey[0]}${newKey[1][0].toUpperCase()}${newKey[1].slice(1, key.length)}` : newKey[0]
    newObj[newKey] = obj[key]
  }
  return newObj
}