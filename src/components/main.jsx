import React from 'react'
import Header from './Header'
import styles from './Main.module.css'
import Mid from './Mid'

const main = () => {
  return (
    <div className={styles.main}>
        <div className={styles.bg}>
            <Header/>
            <Mid/>
        </div>
    </div>
  )
}

export default main