import { Launch } from '@mui/icons-material';
import React, {useState, useEffect, useRef} from 'react';
import styles from './index.module.css';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router';
import axios from 'axios';

export default function SignUpPage() {

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

    const handleSubmit = (event) => {
        event.preventDefault();
        formData.name = nameInputValue;
        formData.id_num = idNumInputValue;
        formData.email = emailInputValue;
        formData.address = addressInputValue;
        formData.gender = genderInputValue;
        formData.birthplace = birthplaceInputValue;
        formData.birthdate = birthdateInputValue;
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


    useEffect(() => {
        getVideo();
      }, [videoRef]);

    const getVideo = () => {
    navigator.mediaDevices
        .getUserMedia({ video: { width: 480 } })
        .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        // video.play();
        })
        .catch(err => {
        console.error("error:", err);
        });
    };

    const handleAgree = (e) => {
        setButtonStatus(!buttonStatus)
    }

    const capture =React.useCallback(
        (videoRef, formData) => {
            const imageSrc = videoRef.current.getScreenshot();
            formData.image = imageSrc;
            console.log(formData)
            // console.log(`imageSrc=${imageSrc}`)
            axios.post(`http://127.0.0.1:5000/registration`, formData)
                .then((res) => {
                    console.log(`response=${res.data['data']}`)
  
                    navigate('/registrasi')
  
                })
                .catch(error => {
                    console.log(`error=${error}`)
                    // setError(true)
                })
                .finally(() => {
                  // setLoading(true)
                })
        },
        [videoRef]
    );

    return (
    <div className={styles.main}>
        <form>
        <div className={styles.section_1}>
            <div className={styles.logo}>
                iDENTIFY
            </div>
            <div className={styles.webcam_container}>
                <Webcam className="z-10 h-full border border-dark-green rounded-lg shadow-lg transform scale-x-minus" ref={videoRef} />
            </div>
            <div className={styles.title_description}>
                Pastikan wajah anda tampak jelas tanpa ada objek yang menghalangi
            </div>
            {/* <div className={styles.more_button}>
                <a>Selengkapnya <Launch className='scale-75'/> </a>
            </div> */}
        </div>
        <div className={styles.section_2}>
            <div className={styles.title_2}>
                Sign up.
            </div>
            <div className={styles.signup_form}>
                    <div className={styles.input_container}>
                        <p className={styles.input_title}>Nama Lengkap</p>
                        <input 
                            className={styles.input_field}
                            type='text' 
                            id='fullName' 
                            placeholder='Nama Lengkap Anda'
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
                                required={true}
                            />
                            <input 
                                className={styles.birthdate_input_field}
                                type='date' 
                                id='birthdateInput'
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
                            onSubmit={handleSubmit} disabled={buttonStatus}>
                                Daftar
                        </button>
                    </div>
                
            </div>
            <div className={styles.signup_text}>
                Sudah terdaftar? <a href='/verifikasi'>Verifikasi</a>
            </div>
        </div>
        </form>
    </div>
  )
}
