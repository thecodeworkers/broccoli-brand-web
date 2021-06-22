import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Cancel } from '@images/svg'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { searchProduct, setLoader } from '@store/actions'

const ResponsiveSearch = ({ show = false, method }) => {

  const [visible, setVisible] = useState(true)

  const dispatch = useDispatch()
  const router = useRouter()

  const { shop: { search: shopSearch } } = useSelector((state: any) => state)

  const [searchValue, setSearchValue] = useState(shopSearch?.text);

  const search = () => {
    dispatch(searchProduct(searchValue))

    if (router.pathname != 'shop') {
      dispatch(setLoader(true))
      router.push('shop')
    }
  }

  useEffect(() => {
    if (show) return setVisible(true)
    if (!visible && !show) return setVisible(true)
    if (visible && show) return setVisible(false)
    return setVisible(false)
  }, [show])

  return (
    <div className={visible ? styles._mainIn : styles._mainOut}>
      <div className={styles._searcherContainer}>
        <div className={styles._inputContainer}>
          <input type="text" className={styles._input} placeholder='SEARCH' onChange={(event) => setSearchValue(event.target.value)} onKeyPress={(event) => { if (event.key === 'Enter') search() }} />
        </div>
        <div className={styles._xContainer} onClick={() => setVisible(false)}>
          <Cancel />
        </div>
      </div>
    </div>
  )
}

export default ResponsiveSearch
