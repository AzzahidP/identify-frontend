import React, {useState, useRef, useEffect, useCallback}from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';
import styles from './verification.module.css';
import {useNavigate} from 'react-router-dom';
import { Error, Close, KeyboardArrowDownSharp } from '@mui/icons-material';

export default function Verification() {

  const navigate = useNavigate();

  const videoRef = useRef(null);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Bad Request');
  const [formData, setFormData] = useState({});
  const [detectionModel, setDetectionModel] = useState('FaceNet');
  const [nameInputValue, setNameInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const options = ['FaceNet', 'Adam Geitgey'];

  function handleOptionClick(option) {
    setDetectionModel(option);
    setIsOpen(false);
  }

  function handleInputClick() {
    setIsOpen(!isOpen);
  }

  function handleBlur() {
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  }

  function handleInput(input) {
    const { textContent } = input.target;
    const selected = options.find(option => option === textContent);
    setDetectionModel(selected || null);
  }

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const closeModal = () => {
    setError(!isError)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    formData.nama = nameInputValue;
    capture(formData, detectionModel, event);
  }

  const handleNameInputChange = (event) => {
    setNameInputValue(event.target.value);
  }

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

  const capture = useCallback(
    (formData, detectionModel) => {
      const imageSrc = videoRef.current.getScreenshot();
      formData.img = imageSrc
      console.log(formData)
      
      let modelUsed
      if (detectionModel === 'FaceNet'){
        modelUsed = 'facenet'
      }else{
        modelUsed  = 'ageitgey' 
      }
      axios.post(`https://azzahid.me/verification/${modelUsed}`, formData)
      .then((res) => {
        console.log(`response=${res.data['status']}`)
        if(res.data['status']==='failed'){
          setError(true)
          setErrorMessage(res.data['message'])
        } 
        else{
          navigate('/hasil',{
            state: res.data
          })
        }
      })
      .catch(error => {
        console.log(`error=${error}`)
        setError(true)
      })
    },
    [videoRef]
  );

  return (
    <div className={styles.main}>
        <div className={isError ? styles.modal : styles.modal_hide}>
          <div className={styles.modal_text_container}>
            <div className='transform scale-150'>
              <Error/>
            </div>
            <div className={styles.modal_text}>
              <h1>Verification Error</h1>
              <p>Error: {errorMessage}</p>
            </div>
            <div className={styles.modal_button_container}>
              <button 
              type="button" 
              className={styles.modal_button}
              onClick={closeModal}
                >
                <Close/>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.title}>
          YOLO Face Recognition System
        </div>
        <form onSubmit={handleSubmit}>

            <div className={styles.webcam_container}>
              <Webcam screenshotFormat='image/png' width={480} className="z-10 rounded-sm shadow-2xl transform scale-x-minus" ref={videoRef} />
              {/* <div className={styles.face_area}>
              </div> */}
            </div>
          
            <div className={styles.model_input}>
              <div
                className={styles.model_input_field}
                onClick={handleInputClick}
                onBlur={handleBlur}
                onInput={handleInput}
                id='modelInput'
              >
                {detectionModel ? detectionModel : 'Pilih Model' }
                <KeyboardArrowDownSharp/>
              </div>
              <label
                  htmlFor="modelInput"
                  className={`absolute text-white left-0 -top-5 text-xs`}
              >
                  Pilih Model Face Recognition
              </label>
              <div
                className={`absolute top-12 left-0 z-10 w-full text-white bg-black bg-opacity-90 border-l border-r border-gray-300 rounded-sm shadow-lg transition duration-200 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              >
                <ul>
                  {options.map(option => (
                    <li
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 hover:text-black cursor-pointer border-b border-t border-gray-50"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>

            </div> 
            <div className={styles.input_container}>
              <div className={styles.name_input}>
                <input
                  className={styles.name_input_field}
                  type='text'
                  id='nameInput'
                  value={nameInputValue}
                  onChange={handleNameInputChange}
                  required={true}
                />
                <label
                  htmlFor="nameInput"
                  className={`absolute transition-all duration-500 text-white ${
                    nameInputValue ? 'left-0 -top-5 text-xs' : 'left-3 top-2 text-md'
                  }`}>
                  Nama Lengkap
                </label>
              </div>
              <div className={styles.verif_button}>
                <button
                    type='submit'
                >
                  Verifikasi
                </button>
              </div>
            </div>
        </form>
    </div>
  )
}