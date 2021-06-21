import { removeFromCart } from '@store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { BagResponsive } from '@components'
import styles from './styles.module.scss'
import { TrashCan } from '@images/icons'

const Bag = ({ cart, info = false }) => {

  const { resource: { checkout: { checkout = { bag: {} } }, general: generalPage = {} } } = useSelector((state: any) => state)
  const { bag } = checkout
  const { general } = generalPage
  const dispatch = useDispatch()

  const removeItem = (key) => {
    dispatch(removeFromCart(key))
  }

  return (
    <div className={(!info) ? styles._main : [styles._main, styles._infoMain].join(' ')}>
      {!info && <div className={styles._titleContainer}>
        <div className={styles._titleBox}>
          <h2 className={styles._title}>{bag?.bagTitle}</h2>
          <p className={styles._itemsTitle}>{cart?.contents?.itemCount} {bag?.items}</p>
        </div>
      </div>}
      <div className={styles._tableContainer}>
        <section className={styles._titleTablesContainer}>
          <div className={styles._titleTables}>
            <div className={[styles._tableTitle, styles._orderSummary].join(" ")}>{bag?.table?.orderSummary}</div>
            <div className={styles._tableTitle}>{bag?.table?.cantidad}</div>
            <div className={styles._tableTitle}>{bag?.table?.price}</div>
            <div className={styles._tableTitle}>{bag?.total}</div>
          </div>
        </section>
        <section className={styles._table}>
          <section className={styles._tableBody}>
            {(cart?.contents?.itemCount) ? cart?.contents.nodes.map((data, index) => (
              <div key={index} className={styles._tableRow}>
                <div className={styles._dataTable}>
                  <div className={styles._dataBox}>
                    {(data?.key) ? (
                      <div className={styles._deleteBox}>
                        <p className={styles._deleteButton} onClick={() => removeItem(data?.key)}><TrashCan /></p>
                      </div>) : null
                    }
                    <div className={styles._bagItem} key={index}>
                      <div className={styles._itemImage}>
                        <img src={data?.product?.node?.image?.mediaItemUrl || data?.product?.image?.mediaItemUrl} alt={data?.product?.node?.image?.slug || data?.product?.image?.slug} />
                      </div>
                      <div className={styles._itemContent}>
                        <p className={styles._itemName}>{data?.product?.node?.name || data?.product?.name}</p>
                        <p className={styles._itemName}>{data?.product?.node?.attributes?.nodes[0]?.label || data?.product?.attributes?.nodes[0]?.label}: <span className={styles._color} style={{ backgroundColor: data?.product?.node?.attributes?.nodes[0]?.options[0] || data?.product?.attributes?.nodes[0]?.options[0] }}></span></p>
                        <p className={styles._itemName}>{data?.product?.node?.attributes?.nodes[1]?.label || data?.product?.attributes?.nodes[1]?.label}: <span className={styles._data}>{data?.product?.node?.attributes?.nodes[1]?.options[0] || data?.product?.attributes?.nodes[1]?.options[0]}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles._dataTable}>
                  <div className={styles._dataBox}>
                    {!info && <p className={[styles._dataText, styles._quantityButton].join(' ')}>-</p>}
                    <p className={styles._dataText} >{data?.quantity}</p>
                    {!info && <p className={[styles._dataText, styles._quantityButton].join(' ')} >+</p>}
                  </div>
                </div>
                <div className={styles._dataTable}>
                  <div className={styles._dataBox}>
                    <p className={styles._dataText}>{data?.product?.node?.price || data?.product?.price}</p>
                  </div>
                </div>
                <div className={styles._dataTable}>
                  <div className={styles._dataBox}>
                    <p className={styles._dataText}>{data?.total}</p>
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
          <section className={styles._tableFooter}>
            <div className={styles._leftFooter}>
              <p className={styles._footerText}>
                {cart?.contents?.itemCount} {bag?.items}
              </p>
            </div>
            <div className={styles._rightFooter}>
              <p className={styles._footerText}>
                {bag?.total} {cart?.contentsTotal}
              </p>
            </div>
          </section>
        </section>
      </div>
      <div className={styles._responsive}>
        <BagResponsive bag={bag} general={general} cart={cart} />
      </div>
    </div>
  )
}

export default Bag
