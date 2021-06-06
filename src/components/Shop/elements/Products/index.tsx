import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import { Product, Pagination } from '@components'
import { paginate } from '@utils'

const perPage = 5

const Products = () => {

  const [page, setPage] = useState(1)

  const { resource: { products } } = useSelector((state: any) => state)
  console.log(products)

  return (
    <>
      <section className={styles._mainContent}>
        <aside className={styles._sidebarContainer}>
          <h2>Sidebar</h2>
        </aside>
        <div className={styles._productsContainer}>
          <div className={styles._productContainer}>
            {
              // paginate(products?.nodes, page, perPage).map((product, index) => {
              //   index++
              //   return (
              //     <div key={index} className={[styles[`_item${index}`], styles._item].join(" ")}>
              //       <Product key={index} data={product} />
              //     </div>
              //   )
              // })
            }
          </div>
          {/* <div className={styles._paginationContainer}>
            {
              products?.nodes?.length ? (
                <Pagination color='#707070' currentPage={page} items={products.nodes} perPage={perPage} changePage={setPage}/>
              ) : null
            }
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Products
