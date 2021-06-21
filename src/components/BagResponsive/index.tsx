import { removeFromCart } from '@store/actions'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.scss'

const BagResponsive = ({ bag, general, cart}) => {

  const dispatch = useDispatch()

  const removeItem = (key) => {
    dispatch(removeFromCart(key))
  }

  return (
    <>
      <section className={styles._topLine}>
        <div className={styles._mainRow}>
        {(cart?.contents?.itemCount) ? cart?.contents.nodes.map((data, index) => (
          <div key={index} className={styles._tableRow}>
            <div className={styles._itemImage}>
              <div className='_img'></div>
              <style jsx>{`
                @media(max-width: 768px) {
                  ._img {
                    background-image: url(${data?.product?.node?.image?.mediaItemUrl});
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    height: 60vh;
                  }
                }
                @media(max-width: 576px) {
                  ._img {
                    background-image: url(${data?.product?.node?.image?.mediaItemUrl});
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    height: 40vh;
                  }
                }
              `}</style>  
            </div>
            <div className={styles._content}>
              <div className={styles._productName}>
                <p>{data?.product?.node?.name}</p>
              </div>
              <div className={styles._colorSection}>
                <p>{data?.product?.node?.attributes?.nodes[0]?.label}</p>
                <span className={styles._color} style={{ backgroundColor: data?.product?.node?.attributes?.nodes[0]?.options[0] }}></span>
              </div>
              <div className={styles._sizeSection}>
                <p>{data?.product?.node?.attributes?.nodes[1]?.label}:</p>
                <span className={styles._data}>{data?.product?.node?.attributes?.nodes[1]?.options[0]}</span>
              </div>
              <div className={styles._bagSection}>
                <div className={styles._infoContent}>
                  <p>{bag?.table?.cantidad}: </p>
                  <p className={styles._dataText} >{data?.quantity}</p>
                </div>
                <div className={styles._dataBox}>
                  <p className={[styles._dataText, styles._quantityButton].join(' ')}>-</p>
                  <p className={[styles._dataText, styles._quantityButton].join(' ')} >+</p>
                </div>
              </div>
              <div className={styles._dataPrice}>
                <p className={styles._dataText}>{data?.product?.node?.price}</p>
              </div>
              <div className={styles._deleteBox}>
                <p className={styles._deleteButton} onClick={() => removeItem(data?.key)}>X</p>
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
        </div>
        <section className={styles._bottomContent}>
          <div className={styles._bottomFooter}>
            <p className={styles._footerText}>{bag?.subtotal} </p>
            <p className={styles._footerText}>{cart?.contentsTotal}</p>
          </div>
        </section>
      </section>
    </>
  )
}

export default BagResponsive