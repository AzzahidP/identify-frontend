import { PowerSettingsNew } from '@mui/icons-material';
import React, {useState, useRef, useEffect}from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';
import styles from './index.module.css';
import {useNavigate} from 'react-router-dom';

export default function FillData() {

  const navigate = useNavigate();

  const videoRef = useRef(null);
  const [isError, setError] = useState(false);
  const [formData, setFormData] = useState({});
  const [nameInputValue, setNameInputValue] = useState('');
  const [numInputValue, setNumInputValue] = useState('');

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const closeModal = () => {
    setError(!isError)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    formData.nama = nameInputValue;
    formData.num = numInputValue;
    capture(videoRef, formData);
  }

  const handleNameInputChange = (event) => {
    setNameInputValue(event.target.value);
  }

  const handleNumInputChange = (event) => {
    setNumInputValue(event.target.value);
  }

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        // video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

    const capture =React.useCallback(
      (videoRef, formData) => {
          const imageSrc = videoRef.current.getScreenshot();
          formData.img = imageSrc;
          console.log(formData)
          // console.log(`imageSrc=${imageSrc}`)
          axios.post(`http://192.168.18.245:5000/verification`, formData)
              .then((res) => {
                  console.log(`response=${res.data['message']}`)

                  navigate('/result',{
                    state: res.data
                  })

              })
              .catch(error => {
                  console.log(`error=${error}`)

                  setError(true)
                  // setFormData({});
                  // setNameInputValue('');
                  // setNumInputValue('');
              })
              .finally(() => {
                // setLoading(true)
              })
      },
      [videoRef]
  );




  return (
    <div className={styles.main}>
        <div className={isError ? styles.modal : styles.modal_hide}>
          <div className={styles.modal_text_container}>
            <div className={styles.modal_text}>
              Verifikasi Gagal
            </div>
            <div className={styles.modal_button_container}>
              <button 
              type="button" 
              className={styles.modal_button}
              onClick={closeModal}
                >
                Coba Lagi
              </button>
            </div>
          </div>
        </div>
        <div className={styles.title}>
          Lengkapi Identitas Anda
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_container}>
            <div className={styles.webcam_container}>
              <Webcam className="z-10 h-4/5 border border-dark-green rounded-lg shadow-lg transform scale-x-minus" ref={videoRef} />
            </div>
            <div className={styles.fill_data_container}>
              <div className={styles.fill_data}>
                <div className={styles.input_container}>
                  <p className={styles.input_title}>Nama Lengkap</p>
                  <input 
                      className={styles.input_field}
                      type='text' 
                      id='nameInput' 
                      placeholder='Nama Lengkap'
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
                      id='numberInput' 
                      placeholder='NIK'
                      value={numInputValue}
                      onChange={handleNumInputChange}
                      required={true}
                  />
                </div>
                <div className={styles.button_container}>
                  <div className={styles.verif_button}>
                    <button
                        type='submit'
                        onClick={capture}
                        >
                          Verifikasi
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className={styles.daftar_text}>
            Belum terdaftar? <a href='/'>Daftar Sekarang</a>
        </div>
    </div>
  )
}