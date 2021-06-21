import React, { useState } from 'react'
import styles from './styles.module.scss'
import { getDate, getHour } from '@utils'
import { Bag } from '@components'
const Orders = ({ data, order }) => {

  const [cart, setCart] = useState(null);

  const buildCart = () => {
    const dataCart = {
      contents: {
        nodes: order?.lineItems?.nodes,
        itemCount: order?.lineItems?.nodes?.length
      },
      contentsTotal: order?.total
    }

    setCart(dataCart)
  }

  return data && order ? (
    <div className={styles._main}>
      <div className={styles._tableContainer}>
        <section className={styles._titleTablesContainer}>
          <div className={styles._titleTables}>
            <div className={[styles._tableTitle, styles._orderTitle].join(' ')}>{data?.orders?.table?.order}</div>
            <div className={styles._tableTitle}>{data?.orders?.table?.date}</div>
            <div className={styles._tableTitle}>{data?.orders?.table?.hour}</div>
          </div>
        </section>
        <section className={styles._table}>
          <section className={styles._tableBody}>
            <div className={styles._tableRow}>
              <div className={styles._dataTable}>
                <div className={[styles._dataBox, styles._orderBox].join(" ")}>
                  <p className={[styles._dataText, styles._orderText].join(" ")} onClick={() => (cart) ? setCart(null) : buildCart()}>{order?.orderNumber}</p>
                </div>
              </div>
              <div className={styles._dataTable}>
                <div className={styles._dataBox}>
                  <p className={styles._dataText}>{getDate(order?.date)}</p>
                </div>
              </div>
              <div className={styles._dataTable}>
                <div className={styles._dataBox}>
                  <p className={styles._dataText}>{getHour(order?.date)}</p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
      {
        (cart) ?
          (
            <div className={styles._resumeOrder}>
              <Bag cart={cart} info={true} />
            </div>
          ) : null
      }
    </div>
  ) : null
}

export default Orders