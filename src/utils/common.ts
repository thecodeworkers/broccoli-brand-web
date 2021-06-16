import { useRouter } from 'next/router'
import { setLoader } from '../store/actions'
import { useDispatch } from 'react-redux'

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
  if(ref) {
    const target = ref.current;
    window.scrollTo({ top: !number ? target.offsetTop : target.offsetTop - number, behavior: 'smooth' });
  } 
}

export const createMarkup = (text) => { return {__html: text}; }
