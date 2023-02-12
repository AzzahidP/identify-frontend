import React from 'react'
import Webcam from '../../components/webcam'
import styles from './index.module.css'

export default function OpenWebCam() {
  const NAMA = 'XXXX XXXX XXXX'
  const NUMBER = 'XXX XXX XXX XXX'
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        Mengenali Wajah ...
      </div>
      <div className={styles.webcam_container}>
        <Webcam/>
      </div>
      <div className={styles.data_container}>
        <div className={styles.info_container}>
          Nama lengkap: {NAMA}
        </div>
        <div className={styles.info_container}>
          Nomor Identitas: {NUMBER}
        </div>
      </div>
    </div>
  )
}
