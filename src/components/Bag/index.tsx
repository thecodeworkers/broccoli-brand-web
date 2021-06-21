import { removeFromCart } from '@store/actions'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.scss'
import { TrashCan } from '@images/icons'

const Bag = () => {

  const { resource: { checkout: { checkout = { bag: {} } }, general: generalPage = {} }, cart: { cart } } = useSelector((state: any) => state)
  const { bag } = checkout
  const { general } = generalPage
  const dispatch = useDispatch()

  const removeItem = (key) => {
    dispatch(removeFromCart(key))
  }

  return (
    <div className={styles._main}>
      <div className={styles._titleContainer}>
        <div className={styles._titleBox}>
          <h2 className={styles._title}>{bag?.bagTitle}</h2>
          <p className={styles._itemsTitle}>{cart?.contents?.itemCount} {bag?.items}</p>
        </div>
      </div>
      <div className={styles._tableContainer}>
        <table className={styles._table}>
          <thead className={styles._tableParts}>
            <tr>
              <th className={styles._tableTitle}>{bag?.table?.orderSummary}</th>
              <th className={styles._tableTitle}>{bag?.table?.cantidad}</th>
              <th className={styles._tableTitle}>{bag?.table?.price}</th>
              <th className={styles._tableTitle}>{bag?.total}</th>
            </tr>
          </thead>
          <tbody className={styles._tableBody}>
            {(cart?.contents?.itemCount) ? cart?.contents.nodes.map((data, index) => (
              <tr key={index} className={styles._tableParts}>
                <td className={styles._dataTable}>
                  <div className={styles._dataBox}>
                    <div className={styles._deleteBox}>
                      <p className={styles._deleteButton} onClick={() => removeItem(data?.key)}><TrashCan /></p>
                    </div>
                    <div className={styles._bagItem} key={index}>
                      <div className={styles._itemImage}>
                        <img src={data?.product?.node?.image?.mediaItemUrl} alt={data?.product?.node?.image?.slug} />
                      </div>
                      <div className={styles._itemContent}>
                        <p className={styles._itemName}>{data?.product?.node?.name}</p>
                        <p className={styles._itemName}>{data?.product?.node?.attributes?.nodes[0]?.label} <span className={styles._color} style={{ backgroundColor: data?.product?.node?.attributes?.nodes[0]?.options[0] }}></span></p>
                        <p className={styles._itemName}>{data?.product?.node?.attributes?.nodes[1]?.label} <span className={styles._data}>{data?.product?.node?.attributes?.nodes[1]?.options[0]}</span></p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={styles._dataTable}>
                  <div className={styles._dataBox}>
                    <p className={[styles._dataText, styles._quantityButton].join(' ')}>-</p>
                    <p className={styles._dataText} >{data?.quantity}</p>
                    <p className={[styles._dataText, styles._quantityButton].join(' ')} >+</p>
                  </div>
                </td>
                <td className={styles._dataTable}>
                  <div className={styles._dataBox}>
                    <p className={styles._dataText}>{data?.product?.node?.price}</p>
                  </div>
                </td>
                <td className={styles._dataTable}>
                  <div className={styles._dataBox}>
                    <p className={styles._dataText}>{data?.total}</p>
                  </div>
                </td>
              </tr>
            )) :
              <tr className={styles._tableParts}>
                <td colSpan={4}>
                  <div className={styles._noItemBox}>
                    <p className={styles._noItemText}>{bag?.noItems}</p>
                  </div>
                </td>
              </tr>
            }
          </tbody>
          <tfoot className={styles._tableParts}>
            <tr>
              <td colSpan={2}>
                <div className={styles._footerBox}>
                  <p className={styles._footerText}>
                    {cart?.contents?.itemCount} {bag?.items}
                  </p>
                </div>
              </td>
              <td colSpan={2}>
                <div className={styles._footerBox}>
                  <p className={styles._footerText}>
                    {bag?.total} {cart?.contentsTotal}
                  </p>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default Bag
