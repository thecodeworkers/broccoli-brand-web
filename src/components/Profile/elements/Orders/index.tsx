import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './styles.module.scss'
import { Button } from '@components'
import { SingleOrder } from './Elements'
import { filter, getDate, getHour } from '@utils'

const Orders = ({ data }) => {


  const { resource: { checkout: { checkout }, general: generalPage = {} }, user: { user } } = useSelector((state: any) => state)
  const { bag = {} } = checkout

  const [order, setOrder] = useState(null)

  const [orders, setOrders] = useState(user?.orders?.nodes)
  const [search, setSearch] = useState('')

  const getProcess = (process) => {
    switch (process) {
      case "PROCESSING":
        return 'In Progress'
      default:
        return 'hola'
    }
  }

  const searchOrder = () => {
    const newOrders = filter(user?.orders?.nodes, search, 'orderNumber');
    setOrders(newOrders)
  }

  return data ? (
    <div className={styles._main}>
      <div className={styles._TitleBox}>
        <h2 className={styles._Title}>{data?.orders?.title}</h2>
      </div>
      <div className={styles._tableContainer}>
        <section className={styles._titleTablesContainer}>
          <div className={styles._titleTables}>
            <div className={[styles._tableTitle, styles._orderTitle].join(' ')}>{data?.orders?.table?.order}</div>
            <div className={styles._tableTitle}>{data?.orders?.table?.date}</div>
            <div className={styles._tableTitle}>{data?.orders?.table?.hour}</div>
            <div className={[styles._tableTitle, styles._statusTitle].join(' ')}>{data?.orders?.table?.status}</div>
          </div>
        </section>
        <section className={styles._table}>
          <section className={styles._tableBody}>
            {(orders?.length) ? orders?.map((data, index) => (
              <div key={index} className={styles._tableRow}>
                <div className={styles._dataTable}>
                  <div className={[styles._dataBox, styles._orderBox].join(" ")}>
                    <p className={[styles._dataText, styles._orderText].join(" ")} onClick={() => setOrder(data)}>{data?.orderNumber}</p>
                  </div>
                </div>
                <div className={styles._dataTable}>
                  <div className={styles._dataBox}>
                    <p className={styles._dataText}>{getDate(data?.date)}</p>
                  </div>
                </div>
                <div className={styles._dataTable}>
                  <div className={styles._dataBox}>
                    <p className={styles._dataText}>{getHour(data?.date)}</p>
                  </div>
                </div>
                <div className={styles._dataTable}>
                  <div className={[styles._dataBox, styles._statusBox].join(" ")}>
                    <p className={styles._dataText}>{getProcess(data?.status)}</p>
                    <div className={styles._dataButton}>
                      <Button text={'Cancel'} borderColor="black" blackHover={true} colorText="black" />
                    </div>
                  </div>
                </div>
              </div>
            )) :
              <div className={styles._tableParts}>
                <div>
                  <div className={styles._noItemBox}>
                    <p className={styles._noItemText}>{bag?.noItems}</p>
                  </div>
                </div>
              </div>
            }
          </section>
        </section>
      </div>
      {orders?.length && <div className={styles._searchContainer}>
        <div className={styles._searchBox}>
          <input name='search' className={styles._searchInput} value={search} onChange={(event) => { setSearch(event.target.value) }} placeholder={data?.orders?.table?.searchPlaceholder} />
          <button className={styles._searchButton} onClick={searchOrder} >
            {data?.orders?.table?.search}
          </button>
        </div>
      </div>}
      <SingleOrder data={data} order={order} />
      {/* <div className={styles._responsive}>
        <BagResponsive bag={bag} general={general} cart={cart} />
      </div> */}
    </div>
  ) : null
}

export default Orders