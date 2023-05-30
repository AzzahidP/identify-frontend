import { CheckCircle} from '@mui/icons-material'
import React from 'react'
import styles from './result.module.css'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Result() {

    const location = useLocation()
    const navigate = useNavigate()

    const backHome = () => {
        navigate('/')
    }

    const FULL_NAME = location.state.nama
    const IMG_STRING = `data:image/png;base64,${location.state.img}`

  
  return (
    <div className={styles.main}>
        <div className={styles.title}>
            Hasil Verifikasi
        </div>
        <div className={styles.section_1}>
            <img src={IMG_STRING}/>
            <div className={styles.result_container}>
                <div className={styles.result_text}>
                    <h1>Halo, {FULL_NAME}!</h1>
                    <p>Anda telah terverifikasi <a><CheckCircle/></a></p>
                    <div className={styles.time_table}>
                        <div className={styles.time_row}>
                            <div className={styles.key}>
                                Face Detection
                            </div>
                            <div className={styles.val}>
                                {location.state.det_time} ms
                            </div>
                        </div>
                        <div className={styles.time_row}>
                            <div className={styles.key}>
                                Feature Extraction
                            </div>
                            <div className={styles.val}>
                                {location.state.ext_time} ms
                            </div>
                        </div>
                        <div className={styles.time_row}>
                            <div className={styles.key}>
                                Identification
                            </div>
                            <div className={styles.val}>
                                {location.state.clf_time} ms
                            </div>
                        </div>
                        <div className={styles.time_row}>
                            <div className={styles.key}>
                                Response time 
                            </div>
                            <div className={styles.val}>
                                {location.state.e2e_time} ms
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.home_button_container}>
                    <div className={styles.verif_button}>
                        <button
                            type='button'
                            onClick={backHome}
                            >
                            Halaman Utama
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
