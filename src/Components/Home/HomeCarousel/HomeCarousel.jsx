import React from "react";
import "./HomeCarousel.css";

const HomeCarousel = () => {
  return (
    <div className=" carousel-background ">
      <h1 className="top-heading">
        <span className="text-red-500">SAE</span>-NITD
      </h1>
      <p>Endurance <span className="line-color">|</span> Innovation <span className="line-color">|</span> Precision</p>
    </div>
  );
};

export default HomeCarousel;

// import React, { useEffect, useState, useRef } from "react";
// import "./HomeCarousel.css";

// const HomeCarousel = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const videoElement = videoRef.current;
//     if (videoElement) {
//       setTimeout(() => {
//         videoElement.play();
//       }, 100); // Small delay to ensure resources are loaded
//     }
//   }, []);

//   return (
//     <div className="homvideo-container">
//       <video
//         ref={videoRef}
//         className="homvideo"
//         muted
//         loop
//         playsInline
//         preload="metadata"
//         src="/Carvideo1.mp4"
//       ></video>
//     </div>
//   );
// };

// export default HomeCarousel;
