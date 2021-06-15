import { getResources } from '../store/actions'

export const normalizedArray = response => response ? response : []

export const normalized = response => response ? response : {}

export const actionObject = (type: string, payload = null) => ({ type, payload })

export const paginate = (items: Array<any>, page_number: number = 1, page_size: number = 15) => {
  return items?.slice((page_number - 1) * page_size, page_number * page_size);
}

export const scrolling = (reference) => {

  if(reference) {
    const target = reference.current;
    window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
  }
}

export const scrollTo = (ref: any) => {
  window.scrollTo({ top: ref.offsetTop, behavior: 'smooth' });
}

export const createMarkup = (text) => { return {__html: text}; }

export const getCurrentLang = req => {
  try {
    const currentCookie = req.headers.cookie.replace(
      /(?:(?:^|.*;\s*)lang\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  
    return currentCookie

  } catch {
    return 'ES'
  }
}

export const dispatchPage = (props, pageName) => {
  const { store, req } = props
  const lang = getCurrentLang(req)
  return store.dispatch(getResources(pageName, lang))
}
