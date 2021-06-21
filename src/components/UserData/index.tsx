import React from 'react'
import Head from 'next/head'
import { Navbar, Footer } from '@components'
import { Billing, Shipping, Buttonery } from './elements'
import { useSelector } from 'react-redux'
import styles from './styles.module.scss'

const UserData = ({ data }) => {
  const { user: { user } } = useSelector((state: any) => state)
  return (
    <div>
      <Head>
        <title>Broccoli</title>
      </Head>
      <Navbar />
      <div className={styles._titleBox}>
        <h2 className={styles._title}>
          {`${user.firstName} ${user.lastName}`}
        </h2>
        <h4 className={styles._subTitle}>
          {data?.subtitle}
        </h4>
      </div>
      <Shipping data={data} />
      <Billing />
      <Buttonery data={data} />
      <Footer />
    </div>
  )
}

export default UserData
