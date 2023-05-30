import React, {useState, useEffect, useRef} from 'react';
import styles from './register.module.css';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RegistrationPage() {

    const navigate = useNavigate();
    const [buttonStatus, setButtonStatus] = useState(true)
    const videoRef = useRef(null);
    const [formData, setFormData] = useState({});
    const [nameInputValue, setNameInputValue] = useState('');
    const [idNumInputValue, setIdNumInputValue] = useState('');
    const [emailInputValue, setEmailInputValue] = useState('');
    const [addressInputValue, setAddressInputValue] = useState('');
    const [genderInputValue, setGenderInputValue] = useState('');
    const [birthplaceInputValue, setBirthplaceInputValue] = useState('');
    const [birthdateInputValue, setBirthdateInputValue] = useState('');

    useEffect(() => {
        getVideo();
      }, [videoRef]);

    const handleAgree = () => {
        setButtonStatus(!buttonStatus)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        formData.name = nameInputValue;
        formData.id_num = idNumInputValue;
        formData.email = emailInputValue;
        formData.address = addressInputValue;
        formData.gender = genderInputValue;
        formData.birthplace = birthplaceInputValue;
        formData.birthdate = birthdateInputValue;
        capture(videoRef, formData)
    }

    const handleNameInputChange = (event) => {
        setNameInputValue(event.target.value);
    }
    const handleIdNumInputChange = (event) => {
        setIdNumInputValue(event.target.value);
    }
    const handleEmailInputChange = (event) => {
        setEmailInputValue(event.target.value);
    }
    const handleAddressInputChange = (event) => {
        setAddressInputValue(event.target.value);
    }
    const handleGenderInputChange = (event) => {
        setGenderInputValue(event.target.value);
    }
    const handleBirthplaceInputChange = (event) => {
        setBirthplaceInputValue(event.target.value);
    }
    const handleBirthdateInputChange = (event) => {
        setBirthdateInputValue(event.target.value);
    }

    const getVideo = () => {
    navigator.mediaDevices
        .getUserMedia({ video: { width: 480 } })
        .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        })
        .catch(err => {
        console.error("error:", err);
        });
    };

    const capture = React.useCallback(
        (videoRef, formData) => {
            const imageSrc = videoRef.current.getScreenshot();
            formData.image = imageSrc;
            console.log(formData)
            axios.post(`https://identify-be-lpkxsgezjq-et.a.run.app/registration`, formData)
                .then((res) => {
                    console.log(`response=${res.data}`)
                    navigate('/verifikasi')
                })
                .catch(error => {
                    console.log(`error=${error}`)
                })
        },
        [videoRef]
    );

    return (
    <div className={styles.main}>
      
            <div className={styles.section_1}>
                <div className={styles.logo}>
                    iDENTIFY
                </div>
                <div className={styles.webcam_container}>
                    <Webcam screenshotFormat='image/png' className="z-10 h-full border border-dark-green rounded-lg shadow-lg transform scale-x-minus" ref={videoRef} />
                </div>
                <div className={styles.title_description}>
                    Pastikan wajah anda tampak jelas tanpa ada objek yang menghalangi
                </div>
            </div>
            <div className={styles.section_2}>
                <div className={styles.title_2}>
                    Registrasi.
                </div>
                <form onSubmit={handleSubmit}>
                <div className={styles.signup_form}>
                    <div className={styles.input_container}>
                        <p className={styles.input_title}>Nama Lengkap</p>
                        <input 
                            className={styles.input_field}
                            type='text' 
                            id='fullName' 
                            placeholder='Nama Lengkap Anda'
                            value={nameInputValue}
                            onChange={handleNameInputChange}
                            required={true}
                        />
                    </div>
                    <div className={styles.input_container}>
                        <p className={styles.input_title}>Nomor Identitas</p>
                        <input 
                            className={styles.input_field}
                            type='number' 
                            id='identityNumber' 
                            placeholder='NIK'
                            value={idNumInputValue}
                            onChange={handleIdNumInputChange}
                            required={true}
                        />
                    </div>
                    <div className={styles.input_container}>
                        <p className={styles.input_title}>Email</p>
                        <input 
                            className={styles.input_field}
                            type='email' 
                            id='emailInput' 
                            placeholder='name@email.com'
                            value={emailInputValue}
                            onChange={handleEmailInputChange}
                            required={true}
                        />
                    </div>
                    <div className={styles.input_container}>
                        <p className={styles.input_title}>Alamat Domisili</p>
                        <input 
                            className={styles.input_field}
                            type='text' 
                            id='addressInput' 
                            placeholder='Alamat domisili sesuai KTP'
                            value={addressInputValue}
                            onChange={handleAddressInputChange}
                            required={true}
                        />
                    </div>
                    <div className={styles.input_container}>
                        <p className={styles.input_title}>Jenis Kelamin</p>
                        <input 
                            className={styles.input_field}
                            type='text' 
                            id='genderInput' 
                            placeholder='Jenis Kelamin'
                            value={genderInputValue}
                            onChange={handleGenderInputChange}
                            required={true}
                        />
                    </div>
                    <div className={styles.input_container}>
                        <p className={styles.input_title}>Tempat & Tanggal Lahir</p>
                        <div className={styles.birth_info}>
                            <input 
                                className={styles.birthplace_input_field}
                                type='text' 
                                id='birthplaceInput' 
                                placeholder='Kota/Kab'
                                value={birthplaceInputValue}
                                onChange={handleBirthplaceInputChange}
                                required={true}
                            />
                            <input 
                                className={styles.birthdate_input_field}
                                type='date' 
                                id='birthdateInput'
                                value={birthdateInputValue}
                                onChange={handleBirthdateInputChange}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className={styles.input_terms_container}>
                        <input 
                            className={styles.input_terms}
                            type='checkbox' 
                            id='terms'
                            onChange={handleAgree}
                            required={true}
                        />
                        <p>Saya telah menyetujui <a href='/#'>Syarat dan Ketentuan</a></p>
                    </div>
                    <div className={styles.button_container}>
                        <button
                            type='submit' 
                            className={styles.signup_button}
                            disabled={buttonStatus}
                            onClick={capture}>
                                Daftar
                        </button>
                    </div>
                </div>
                </form>
                <div className={styles.signup_text}>
                    Sudah terdaftar? <a href='/verifikasi'>Verifikasi</a>
                </div>
            </div>
    </div>
  )
}
