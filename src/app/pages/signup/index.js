import { Launch } from '@mui/icons-material';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react';
import styles from './index.module.css';

export default function SignUpPage() {
    const [signup, setsignup] = useState(false)
    const [buttonStatus, setButtonStatus] = useState(true)

    const signupHandle = () => {
        setsignup(!signup)
        console.log(signup)
    }

    const handleChange = (e) => {
        setButtonStatus(!buttonStatus)
    }
  return (
    <div className={styles.main}>
        <div className={styles.section_1}>
            <div className={styles.logo}>
                iDENTIFY
            </div>
            <div className={styles.title}>
                Solusi Verifikasi Identitas Online Menggunakan Face Recognition
            </div>
            <div className={styles.title_description}>
                Sistem face recognition berbasis deteksi objek dengan model deep learning YOLOv7 serta diintegrasikan dengan FaceNet
            </div>
            <div className={styles.more_button}>
                <a>Selengkapnya <Launch className='scale-75'/> </a>
            </div>
        </div>
        <div className={styles.section_2}>
            <div className={styles.title_2}>
                Sign up.
            </div>
            <div className={styles.signup_form}>
                <form>
                    <div className={styles.input_container}>
                        <p className={styles.input_title}>Nama Lengkap</p>
                        <input 
                            className={styles.input_field}
                            type='text' 
                            id='fullName' 
                            placeholder='Nama Lengkap Anda'
                        />
                    </div>
                    <div className={styles.input_container}>
                        <p className={styles.input_title}>Nomor Identitas</p>
                        <input 
                            className={styles.input_field}
                            type='number' 
                            id='identityNumber' 
                            placeholder='NIK'
                        />
                    </div>
                    <div className={styles.input_container}>
                        <p className={styles.input_title}>Email</p>
                        <input 
                            className={styles.input_field}
                            type='email' 
                            id='emailInput' 
                            placeholder='name@email.com'
                        />
                    </div>
                    <div className={styles.input_container}>
                        <p className={styles.input_title}>Password</p>
                        <input 
                            className={styles.input_field}
                            type='password' 
                            id='passwordInput' 
                            placeholder='Password'
                        />
                    </div>
                    <div className={styles.input_container}>
                        <p className={styles.input_title}>Ulangi Password</p>
                        <input 
                            className={styles.input_field}
                            type='password' 
                            id='repeatPasswordInput' 
                            placeholder='Password'
                        />
                    </div>
                    <div className={styles.input_terms_container}>
                        <input 
                            className={styles.input_terms}
                            type='checkbox' 
                            id='terms'
                            onChange={handleChange}
                        />
                        <p>Saya telah menyetujui <a href='/#'>Syarat dan Ketentuan</a></p>
                    </div>
                    <div className={styles.button_container}>
                        <button
                            type='submit' 
                            className={styles.signup_button}
                            onClick={signupHandle} disabled={buttonStatus}>
                                Sign up
                        </button>
                    </div>
                </form>
            </div>
            <div className={styles.signup_text}>
                Sudah punya akun? <a href='/login'>Log in</a>
            </div>
        </div>
    </div>
  )
}
