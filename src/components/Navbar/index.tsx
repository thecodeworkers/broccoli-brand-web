import React from 'react'
import styles from './styles.module.scss'
import { BroccoliLogo } from '@images/components';
import { World, Coin, Bag, User, Pipe } from '@images/svg';
import { Input } from 'antd';
import "antd/dist/antd.css";

const { Search } = Input;

const onSearch = value => console.log(value);

const Navbar = () => {
	return (
		<>
			<section className={styles._container}>
				<section className={styles._topContainer}>
					<div className={styles._logoContainer}>
						<BroccoliLogo />
					</div>
					<div className={styles._topSections}>
						<div className={styles._topSection}>
							<World />
							<div className={styles._topText}>Idioma</div>
						</div>
						<div className={styles._topSection}>
							<Coin />
							<div className={styles._topText}>Dólares</div>
						</div>
						<div className={styles._topSection}>
							<Bag />
							<div className={styles._topText}>Carrito</div>
						</div>
						<div className={styles._topSection}>
							<User />
							<div className={[styles._topText, styles._rightMargin].join(" ")}>Iniciar Sesión</div>
							<Pipe />
							<div className={styles._topText}>Registrarse</div>
						</div>
					</div>
				</section>
				<section className={styles._bottomContainer}>
					<div className={styles._bottomSectionsContainer}>
						<div className={styles._bottomSections}>
							<div className={styles._bottomSection}>
								<p className={styles._bottomText}>Home</p>
							</div>
							<div className={styles._bottomSection}>
								<p className={styles._bottomText}>About Us</p>
							</div>
							<div className={styles._bottomSection}>
								<p className={styles._bottomText}>Shop</p>
							</div>
							<div className={styles._bottomSection}>
								<p className={styles._bottomText}>Contacto</p>
							</div>
						</div>
						<div className={styles._searchContainer}>
							<input type="text" className={styles._input} />
							<img src='images/backgrounds/search.svg' className={styles._inputImg} />
							{/* <Search 
								id="search"
								onSearch={onSearch} 
							/> */}
						</div>
					</div>
				</section>
			</section>
		</>
	)
}

export default Navbar