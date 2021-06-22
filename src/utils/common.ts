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

export const dispatchPage = (props, pageName) => {
  const { store, req } = props
  const lang = getCurrentLang(req)

  return store.dispatch(getResources(pageName, lang))
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