import { useSelector } from 'react-redux'
import styles from './styles.module.scss'

const Bag = () => {

  const { resource: { checkout: { bag }, cart } } = useSelector((state: any) => state)

  return (
    <div className={styles._main}>
      <div className={styles._titleContainer}>
        <h2 className={styles._title}>{bag?.bagTitle}</h2>
        <p className={styles._itemsTitle}>{cart?.contents?.itemCount} {bag?.items}</p>
      </div>
      <div className={styles._tableContainer}>
        <table>
          <thead>
            <th>{bag?.table?.orderSummary}</th>
            <th>{bag?.table?.cantidad}</th>
            <th>{bag?.table?.price}</th>
            <th>{bag?.total}</th>
          </thead>
          <tbody>
            {(cart?.contents?.itemCount) ? <></> :
              <tr>
                <td>No Items In Cart</td>
              </tr>
            }
          </tbody>
          <tfoot>
            <td>{cart?.contents?.itemCount} {bag?.items}</td>
            <td>
              {bag?.total} {cart?.contentsTotal}
            </td>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default Bag
