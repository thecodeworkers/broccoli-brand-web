import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Product, Pagination, Recents, Button } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { setLoader } from '@store/actions'
import { paginate } from '@utils'
import Sidebar from '../Sidebar'

const perPage = 12

const Products = ({ data }) => {

  const dispatch = useDispatch()
  const [page, setPage] = useState(1)

  const { resource: { products } } = useSelector((state: any) => state)
  useEffect(() => {
    dispatch(setLoader(false))
  }, [])

  return (
    <>
      <section className={styles._mainContent}>
        <div className={styles._sidebarContent}>
          <Sidebar />
        </div>
        <div className={styles._productsContainer}>
          <div className={styles._sortByContainer}>
            <label htmlFor="sort" className={styles._customSelect}>
              <select name="sort" id="sort" className={styles._selectForm}>
                <option value='SORT BY'>SORT BY</option>
              </select>
            </label>
          </div>
          <div className={styles._productContainer}>
            {
              products.length ?
              paginate(products, page, perPage).map((product, index) => {
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
              products?.length ? (
                <Pagination currentPage={page} items={products} perPage={perPage} changePage={setPage}/>
              ) : null
            }
          </div>
        </div>
      </section>
      <section className={styles._recentlyContainer}>
        <div className={styles._recentlyTitleContainer}> 
          <h3 className={styles.recentlyTitle}>{ data?.recentlyTitle }</h3>
        </div>
        <div className={styles._recentsContainer}>
          <Recents data={data} />
          <Recents data={data} />
          <Recents data={data} />
          <Recents data={data} />
          <Recents data={data} />
          <Recents data={data} />
          <div className={styles._buttonContainer}>
            <Button borderColor="black" colorText='black' text='VIEW MORE' link='#' blackHover={true} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
