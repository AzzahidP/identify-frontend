import React, {useState} from 'react';
import styles from './index.module.css';

export default function LoginPage() {
    const [login, setLogin] = useState(false)
    const loginHandle = () => {
        setLogin(!login)
    }
  return (
    <div className={styles.main}>
        <div className={styles.section_1}>
            <div className={styles.logo}>
                iDENTIFY
            </div>
            <div className={styles.title}>
                Selamat Datang.
            </div>
            <div className={styles.asset_container}>
                <img src='login-asset.svg' className={styles.asset}/>
            </div>
        </div>
        <div className={styles.section_2}>
            <div className={styles.title_2}>
                Log in.
            </div>
            <div className={styles.description_2}>
                Masukkan email dan passoword akun anda yang telah terdaftar
            </div>
            <div className={styles.login_form}>
                <form>
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
                    <div className={styles.button_container}>
                        <button
                            type='submit' 
                            className={styles.login_button}
                            onClick={loginHandle}>
                                Log In
                        </button>
                    </div>
                </form>
            </div>
            <div className={styles.signup_text}>
                atau <a href='/signup'>Daftar Sekarang</a>
            </div>
        </div>
    </div>
  )
}
