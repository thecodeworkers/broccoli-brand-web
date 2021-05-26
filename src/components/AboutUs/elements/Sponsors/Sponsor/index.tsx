import styles from './styles.module.scss'
import { ColorPicker } from '@components'

const Brand = () => {

  return (
    <section className={styles._container}>
      <section className={styles._sponsorContainer}>
        <div className={styles._specsContainer}>
          <p className={styles._specs}>NOMBRE Y APELLIDO</p>
        </div>
        <div className={styles._imageSponsorContainer}>
          <div className={styles._image}></div>
          <div className={styles._sponsorDetail}>
            <p className={styles._Text}>Lorem ipsum dolor sit amet consectetur adipiscing elit id, rutrum ac vitae sed varius potenti sociosqu, lobortis cum pharetra orci et platea augue. Accumsan aenean ornare interdum luctus sociosqu condimentum pellentesque, urna feugiat tempus placerat hendrerit donec ut, tellus leo aptent tortor euismod conubia. Ullamcorper condimentum laoreet facilisis malesuada nunc a hac, potenti proin per aptent venenatis semper, facilisi est molestie justo euismod porttitor. Nisi curabitur vivamus porttitor varius condimentum egestas, ad primis montes suscipit turpis volutpat, metus dictumst lacus aptent arcu. Aenean id neque luctus mollis a ante sociosqu, mi natoque enim eros tristique posuere nostra, semper lacinia torquent montes erat accumsan. Enim arcu ante dictum consequat sapien gravida ullamcorper lacus, interdum habitasse etiam dapibus curae dui litora faucibus, volutpat a phasellus tortor per netus pretium.</p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Brand
