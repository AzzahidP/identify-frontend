import { PowerSettingsNew, Verified } from '@mui/icons-material'
import React from 'react'
import styles from './index.module.css'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Result() {

    const location = useLocation()
    const navigate = useNavigate()

    const backHome = () => {
        navigate('/')
    }

    const FULL_NAME = location.state['Name']
    const ID_NUM = location.state['NIK']
    const BIRTH_PLACE = ''
    // location.state.data.birthplace
    const GENDER = ''
    // location.state.data.gender
    const ADDRESS = ''
    // location.state.data.address

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
                <div className={styles.image_container}>
                    <img className='scale-x-minus' src={`data:image/jpeg;base64,${location.state['ImageBytes']}`}/>
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
            <div className={styles.home_button}>
                <button
                    type='button'
                    onClick={backHome}
                    >
                        Kembali ke Halaman Utama
                </button>
            </div>
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
