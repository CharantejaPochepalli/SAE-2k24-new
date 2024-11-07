import React, { useState, useEffect, useRef } from 'react';
import "./Mlw.css"

const Mlw = () => {
    const galleryImages = [
      "https://i.ibb.co/9cLpg9D/Whats-App-Image-2024-11-06-at-20-28-18-92e1f6f0.jpg", 
      "https://i.ibb.co/yVdMykV/Whats-App-Image-2024-11-06-at-20-28-18-95f656c0.jpg", 
    
     
    ];

    const [headingInView, setHeadingInView] = useState(false);
    const [paragraphInView, setParagraphInView] = useState(false);
    const [galleryInView, setGalleryInView] = useState(false);
  
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);
    const galleryRef = useRef(null);
  
    useEffect(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      };
  
      const handleIntersect = (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headingRef.current) {
            setHeadingInView(entry.isIntersecting);
          }
          if (entry.target === paragraphRef.current) {
            setParagraphInView(entry.isIntersecting);
          }
          if (entry.target === galleryRef.current) {
            setGalleryInView(entry.isIntersecting);
          }
        });
      };
  
      const observer = new IntersectionObserver(handleIntersect, observerOptions);
  
      if (headingRef.current) observer.observe(headingRef.current);
      if (paragraphRef.current) observer.observe(paragraphRef.current);
      if (galleryRef.current) observer.observe(galleryRef.current);
  
      return () => {
        if (headingRef.current) observer.unobserve(headingRef.current);
        if (paragraphRef.current) observer.unobserve(paragraphRef.current);
        if (galleryRef.current) observer.unobserve(galleryRef.current);
      };
    }, []);

  return (
    <>
      <div className="mlw">
        <h1
          className={`Mlw-heading ${headingInView ? 'in-view' : ''}`}
          ref={headingRef}
        >
          ML Workshop
        </h1>
        <p
          className={`Mlw-paragraph ${paragraphInView ? 'in-view' : ''}`}
          ref={paragraphRef}
        >
          SAE hosts an exciting workshop focused on building a machine learning prototype. As AI and machine learning gain traction and become increasingly prevalent, this workshop will delve into the essential aspects of machine learning, data science, and algorithm development. Join us to explore and master the cutting-edge technologies shaping the future of automation.
        </p>
        <div
          className={`Mlw-gallery ${galleryInView ? 'in-view' : ''}`}
          ref={galleryRef}
        >
          {galleryImages.map((src, index) => (
            <div key={index} className="Mlw-gallery-item">
              <img src={src} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="animated-line"></div>
      </div>
    </>
  );
}

export default Mlw;
