import React, { useState, Suspense, lazy } from 'react';
import './Cryptech.css';
import { useNavigate } from 'react-router-dom';

const ReactPlayer = lazy(() => import('react-player'));
const videos = [
  "j_6sNtASHgU",
  "o7fcf5chrTo",
  "JrXKyNwJAvQ",
  "-C2yRvTJ7Ss",
  "wjw50oAJZao",
  "h_Qjiqtd3Vw",
  "P1XK8_ZumVI",
  "1W2jI4JDNtE",
  "aTdqZOGJPDw",
];

const Cryptech = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const navigate = useNavigate();

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  const handleThumbnailClick = (videoId) => {
    // Open the YouTube video in a new tab
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <>
      <section className="homytr">
        <div className="homyt-sae">
          <h1 className="pt-16">Cryptech</h1>
        </div>
      </section>

      <section className="homvid">
        <div className="homvideo-container1">
          {isVideoPlaying ? (
            <Suspense fallback={<></>}>
              <ReactPlayer
                className="homreact-player"
                controls
                url="https://youtu.be/XhYBorFI3Tg?si=aueHXYsFgZ3YdMn9"
                width="100%"
                height="100%"
              />
            </Suspense>
          ) : (
            <img
              src="https://img.youtube.com/vi/XhYBorFI3Tg/0.jpg"
              alt="Video Thumbnail"
              className="homthumbnail"
              onClick={handlePlayVideo}
              style={{ cursor: 'pointer', width: '100%', height: '100%' }}
            />
          )}
        </div>
      </section>

      <section>
        <div className="homslider-container">
          <div className="homslider">
            <div className="homslide-track">
              {videos.map((videoId, index) => (
                <div className="homslide" key={index}>
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                    alt="YouTube video thumbnail"
                    width="240"
                    height="200"
                    onClick={() => handleThumbnailClick(videoId)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cryptech;
