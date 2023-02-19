import { PowerSettingsNew, Verified } from '@mui/icons-material'
import React from 'react'
import styles from './index.module.css'

export default function Result() {

    const FULL_NAME = 'XXXXX XXX XXXXX'
    const ID_NUM = 'XXX XXX XXX XXX'
    const BIRTH_PLACE = 'XX XXXXX XXXX XXXX XXX'
    const GENDER = 'XXX'
    const ADDRESS = 'XXXXXXXX XXXXXXX XXXXXXX XXXXX XXXX XXX XXXXX X XX XXXXX'

  return (
    <div className={styles.main}>
        <div className={styles.title}>
            Verifikasi Berhasil Dilakukan
        </div>
        <div className={styles.icon}>
            <Verified className='transform scale-150'/>
        </div>
        <div className={styles.info_container}>
            <div className={styles.face_container}>
                <div className={styles.head}>
                    Wajah
                </div>
                <div classname={styles.image_container}>
                    <img src='mock-face.svg'/>
                </div>
            </div>
            <div className={styles.details_container}>
                <div className={styles.head}>
                    Rincian Identitas
                </div>
                <div className={styles.details}>
                    <div className={styles.row}>
                        <div className={styles.key}>
                            Nama Lengkap
                        </div>
                        <div className={styles.value}>
                            : {FULL_NAME}
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.key}>
                            Nomor Identitas
                        </div>
                        <div className={styles.value}>
                            : {ID_NUM}
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.key}>
                            Jenis Kelamin
                        </div>
                        <div className={styles.value}>
                            : {GENDER}
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.key}>
                            Tempat & Tanggal Lahir
                        </div>
                        <div className={styles.value}>
                            : {BIRTH_PLACE}
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.key}>
                            Alamat
                        </div>
                        <div className={styles.value}>
                            : {ADDRESS}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.home_button_container}>
            <button
                type='button'
                className={styles.home_button}
                >
                    Kembali ke Halaman Utama
            </button>
        </div>
        <div className={styles.logout_container}>
          <button
            type='button'
            className={styles.logout_button}
            >
              <PowerSettingsNew/> Log Out
          </button>
        </div>
    </div>
  )
}
