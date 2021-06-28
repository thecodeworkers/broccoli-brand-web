import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.scss'
import { Button } from '@components'
import { SingleOrder } from './Elements'
import { filter, getDate, getHour } from '@utils'
import { cancelOrder } from '@store/actions'

const Orders = ({ data }) => {

  const dispatch = useDispatch()

  const { resource: { checkout: { checkout }, general: generalPage = {} }, user: { user } } = useSelector((state: any) => state)
  const { bag = {} } = checkout

  const [order, setOrder] = useState(null)
  const [orders, setOrders] = useState(user?.orders?.nodes)
  const [search, setSearch] = useState('')

  const getProcess = (process) => {
    switch (process.toLowerCase()) {
      case 'processing':
        return 'In Progress'
      case 'completed':
        return 'Completed'
      case 'cancelled':
        return 'Cancelled'
      default:
        return 'hola'
    }
  }

  const searchOrder = () => {
    const newOrders = filter(user?.orders?.nodes, search, 'orderNumber');
    setOrders(newOrders)
  }

  const cancelThisOrder = (orderNumber) => {
    dispatch(cancelOrder(orderNumber))
  }

  useEffect(() => {
    setOrders(user?.orders?.nodes)
  }, [user?.orders?.nodes])

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
                  <div className={[styles._dataBox, styles._orderBox].join(' ')}>
                    <p className={[styles._dataText, styles._orderText].join(' ')} onClick={() => setOrder(data)}>{data?.orderNumber}</p>
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
                  <div className={[styles._dataBox, styles._statusBox].join(' ')}>
                    <p className={styles._dataText}>{getProcess(data?.status)}</p>
                    <div className={styles._dataButton}>
                      {!(data?.status.toLowerCase() === 'completed' || data?.status.toLowerCase() === 'cancelled') && 
                      <Button onClick={() => cancelThisOrder(data?.orderNumber)} disabled={data?.status.toLowerCase() === 'completed' || data?.status.toLowerCase() === 'cancelled'} text={'CANCEL'} borderColor='black' blackHover={true} colorText='black' />}
                    </div>
                  </div>
                </div>
              </div>
            )) :
              <div className={styles._tableParts}>
                <div>
                  <div className={styles._noItemBox}>
                    <p className={styles._noItemText}>{data?.noOrders}</p>
                  </div>
                </div>
              </div>
            }
          </section>
        </section>
      </div>

      <div className={styles._tableContainerResponsive}>
        {orders?.length ? orders.map((item, index) => (
          <section className={styles._rowSection} key={index}>
            <div className={styles._rowResponsiveContainer}>
              <p className={[styles._tableTitle, styles._orderTitle].join(' ')}>{data?.orders?.table?.order}</p>
              <p className={[styles._tableTitle, styles._orderNumber].join(' ')} onClick={() => setOrder(item)}>{item?.orderNumber}</p>
            </div>
            <div className={styles._rowResponsiveContainer}>
              <p className={[styles._tableTitle, styles._orderTitle].join(' ')}>{data?.orders?.table?.date}</p>
              <p className={styles._dataText}>{getDate(item?.date)}</p>
            </div>
            <div className={styles._rowResponsiveContainer}>
              <p className={[styles._tableTitle, styles._orderTitle].join(' ')}>{data?.orders?.table?.hour}</p>
              <p className={styles._dataText}>{getHour(item?.date)}</p>
            </div>
            <div className={styles._rowResponsiveContainer}>
              <p className={[styles._tableTitle, styles._orderTitle].join(' ')}>{data?.orders?.table?.status}</p>
              <p className={styles._dataText}>{getProcess(item?.status)}</p>
            </div>
            <div className={styles._dataButton}>
            {!(item?.status.toLowerCase() === 'completed' || item?.status.toLowerCase() === 'cancelled') && <Button onClick={() => cancelThisOrder(item?.orderNumber)} disabled={item?.status.toLowerCase() === 'completed' || item?.status.toLowerCase() === 'cancelled'} text={'CANCEL'} borderColor='black' blackHover={true} colorText='black' />}
            </div>
          </section>
        )) :
          <div className={styles._tableParts}>
            <div>
              <div className={styles._noItemBox}>
                <p className={styles._noItemText}>{bag?.noItems}</p>
              </div>
            </div>
          </div>
        }

      </div>
      {/* <div className={styles._searchContainer}> */}
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