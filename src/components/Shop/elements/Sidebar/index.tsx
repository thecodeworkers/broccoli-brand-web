import React, { useState } from 'react'
import { ColorPicker } from '@components'
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setProductFilter } from '@store/shop/action'

const Sidebar = () => {
  const dispatch = useDispatch()
  const [unfold, setUnfold] = useState({})
  const { resource: { attributes, productCategories }, shop: { filter }, page: { shopPage: {shop} } } = useSelector((state: any) => state)

  const showItem = (item) => {
    if (Object.keys(unfold).includes(item.toString()) && unfold[item] === item) return setUnfold((old) => ({ ...old, [item]: false }))
    return setUnfold((old) => ({ ...old, [item]: item }))
  }

  const setFilter = (checked, type, value) => {
    const data = filter
    if (checked) data[type].push(value)
    if (!checked) data[type].splice(data[type].indexOf(value), 1)
    dispatch(setProductFilter(data))
  }

  return (
    <>
      <aside className={styles._sidebarContainer}>
        {attributes.map((data, index) => (
          <div className={styles._genderContainer} key={index}>

            <div className={styles._customSelect} onClick={() => { showItem(index) }}>
              <p className={styles._customSelectText}>{data.translation.title}</p>
            </div>
            <div className={[styles[`_${data?.translation?.atData?.showOptions}`], unfold[index] === index ? styles._show : styles._hide].join(" ")}>
              {data?.translation?.atData?.item?.map((item, indexItem) => (data?.translation?.atData?.showOptions !== 'color' ?
                (<label key={indexItem} className={styles._labelFilter}>
                  <input type='checkbox' onChange={(check) => { setFilter(check.target.checked, 'attributes', item.slug) }} className={styles._checkbox} id='choice1-1' name='choice1' />
                  <span className={styles._filterText}>{item.name}</span>
                </label>) :
                (<ColorPicker key={indexItem} color={item.slug} />)
              ))}
            </div>
          </div>
        ))}
        <div className={styles._sizesContainer}>
          <div className={styles._customSelect} onClick={() => { showItem('cat') }}>
            <p className={styles._customSelectText}>{shop.categories}</p>
          </div>
          <div className={[styles._vertical, unfold['cat'] === 'cat' ? styles._show : styles._hide].join(" ")}>
            {productCategories.map((cat, index) => (
              <label key={index} className={styles._labelFilter}>
                <input type='checkbox' onChange={(check) => { setFilter(check.target.checked, 'attributes', cat.translation.slug) }} className={styles._checkbox} id='choice1-1' name='choice1' />
                <span className={styles._filterText}>{cat.translation.name}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
