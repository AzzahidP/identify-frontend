import React, { useEffect, useRef } from "react";

const Webcam = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 400 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

  return (
    <div>
        <video className="h-96 border border-dark-green rounded-lg shadow-lg transform scale-x-minus" ref={videoRef} />
    </div>
  );
};

export default Webcam;