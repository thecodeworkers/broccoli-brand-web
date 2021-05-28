import styles from './styles.module.scss'

const Sponsor = ({ data }) => {
  console.log(data)
  return (
    <>
      <section className={styles._container}>
        <section className={styles._sponsorContainer}>
          <div className={styles._specsContainer}>
            <p className={styles._specs}>{data?.fullName}</p>
          </div>
          <div className={styles._imageSponsorContainer}>
            <div className='_image'></div>
            <div className={styles._sponsorDetail}>
              <p className={styles._Text}>{data?.description}</p>
            </div>
          </div>
        </section>
      </section>
      <style jsx>
        {`
          ._image {
            width: 100%;
            height: 100%;
            background-image: url('${data?.image?.mediaItemUrl}');
            background-size: cover;
            background-repeat: no-repeat;
          }   
        `}
      </style>
    </>
  )
}

export default Sponsor
