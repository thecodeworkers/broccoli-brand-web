import styles from './styles.module.scss'
import { ContactForm } from '@components'

const Contact = ({ data }) => {
  return (
    <>
      <section className={styles._content}>
        <div className={styles._contactFormContainer}>
          <ContactForm data={data} />
        </div>
        <div className={styles._imageContactContainer}>
          <div className='_imageContact'></div>
        </div>
      </section>
      <style jsx>
        {`
          ._imageContact {
            background-image: url('${data?.image?.mediaItemUrl}');
            width: 100%;
            height: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }                  
        `}
      </style>
    </>
  )
}

export default Contact
