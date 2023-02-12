import { PowerSettingsNew } from '@mui/icons-material';
import React from 'react';
import styles from './index.module.css';

export default function FillData() {
  return (
    <div className={styles.main}>
        <div className={styles.title}>Lengkapi Identitas Anda</div>
        <div className={styles.asset}>
          <img src='filldata-asset.svg'/>
        </div>
        <div className={styles.fill_data}>
          <form>
            <div className={styles.input_container}>
              <p className={styles.input_title}>Nama Lengkap</p>
              <input 
                  className={styles.input_field}
                  type='text' 
                  id='nameInput' 
                  placeholder='Nama Lengkap'
              />
            </div>
            <div className={styles.input_container}>
              <p className={styles.input_title}>Nomor Identitas</p>
              <input 
                  className={styles.input_field}
                  type='number' 
                  id='numberInput' 
                  placeholder='NIK'
              />
            </div>
            <div className={styles.button_container}>
                <button
                    type='submit' 
                    className={styles.verif_button}
                    >
                        Verifikasi
                </button>
            </div>
          </form>
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