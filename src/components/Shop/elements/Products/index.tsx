import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Product, Pagination } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { orderProducts, setLoader, setShop } from '@store/actions'
import { paginate } from '@utils'
import Sidebar from '../Sidebar'
import Recents from '../Recents'

const perPage = 12

const Products = ({ data }) => {

  const dispatch = useDispatch()
  const [page, setPage] = useState(1)


  const { shop: { shop, filter }, resource: { products } } = useSelector((state: any) => state)
  useEffect(() => {
    dispatch(setLoader(false))
  }, [])

  useEffect(() => {
    dispatch(setShop())
  }, [products])

  const sortBy = (select) => {
    const value = select.target.value
    dispatch(orderProducts(value))
  }

  return (
    <>
      <section className={styles._mainContent}>
        <Sidebar />
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
                <Pagination currentPage={page} items={shop} perPage={perPage} changePage={setPage} />
              ) : null
            }
          </div>
        </div>
      </section>
      <Recents data={data} />
    </>
  )
}

export default Products
