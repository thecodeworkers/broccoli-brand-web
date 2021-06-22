import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Product, OwnPagination, Recents, Button } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { orderProducts, searchProduct, setLoader, setSearch, setShop } from '@store/actions'
import { paginate } from '@utils'
import Sidebar from '../Sidebar'

const perPage = 12

const Products = ({ data }) => {

  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const [showFilter, setShowFilter] = useState(false)

  const { shop: { shop, recent, search }, resource: { products } } = useSelector((state: any) => state)

  useEffect(() => {
    dispatch(setLoader(false))
  }, [])

  useEffect(() => {
    if (search?.valid) dispatch(searchProduct(search?.text))
    if (!search?.valid) dispatch(setShop())
  }, [products])

  const sortBy = (select) => {
    const value = select.target.value
    dispatch(orderProducts(value))
  }

  const manageFilter = () => {
    if (showFilter) return setShowFilter(false)
    return setShowFilter(true)
  }

  return (
    <>
      <section className={styles._mainContent}>
        <div className={styles._sidebarContent}>
          <div className={styles._filterButton} onClick={() => manageFilter()}>
            <div className={styles._grayBar}></div>
            <p className={styles._grayBarText}>FILTERS</p>
          </div>
          <div className={showFilter ? styles._show : styles._hide}>
            <Sidebar />
          </div>
        </div>
        <div className={styles._productsContainer}>
          <div className={styles._sortByContainer}>
            <label htmlFor="sort" className={styles._customSelect}>
              <select name="sort" id="sort" onChange={sortBy} className={styles._selectForm}>
                {Object.keys(data?.sortBy).map((item, key) => (
                  <option value={item} key={key}>{data?.sortBy[item]}</option>
                ))}
              </select>
            </label>
          </div>
          <div className={styles._productContainer}>
            {
              shop.length ?
                paginate(shop, page, perPage).map((product, index) => {
                  index++
                  return (
                    <div key={index} className={[styles[`_item${index}`], styles._item].join(" ")}>
                      <Product key={index} data={product} />
                    </div>
                  )
                }) : <h2 className={styles._noProductsText}>No products</h2>
            }
          </div>
          <div className={styles._paginationContainer}>
            {
              shop?.length ? (
                <OwnPagination currentPage={page} items={shop} perPage={perPage} changePage={setPage} />
              ) : null
            }
          </div>
        </div>
      </section>
      <section className={styles._recentlyContainer}>
        <div className={styles._recentlyTitleContainer}>
          <h3 className={styles.recentlyTitle}>{data?.recentlyTitle}</h3>
        </div>
        <div className={styles._recentsContainer}>
          {[...recent].splice(0, 6).map((rec, index) => (
            <Recents data={rec} key={index} />
          ))}
          <div className={styles._buttonContainer}>
            <Button borderColor="black" colorText='black' text='VIEW MORE' link='#' blackHover={true} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
