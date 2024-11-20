// Slideshow.tsx
import React, { useState, useEffect } from 'react';
import styles from './Slideshow.module.css';

interface Slide {
  imgSrc: string;
  headline: string;
  paragraph: string;
  lifeSpan: string;
}

interface SlideshowProps {
  slides: Slide[];
}

const Slideshow: React.FC<SlideshowProps> = ({ slides }) => {
  if (!slides || slides.length === 0) {
    return (
      <div className={styles.slideshow}>
        <p className={styles.noSlides}>No slides to display</p>
      </div>
    );
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);

  const getLifeSpanMs = (lifeSpan: string) => {
    const defaultDuration = 5000;
    if (!lifeSpan) return defaultDuration;
    
    const duration = parseInt(lifeSpan.replace('s', ''));
    return isNaN(duration) ? defaultDuration : duration * 1000;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setKey(prev => prev + 1);
    }, getLifeSpanMs(slides[currentIndex].lifeSpan));

    return () => clearTimeout(timer);
  }, [currentIndex, slides]);

  const currentSlide = slides[currentIndex];

  return (
    <div className={styles.wrapper}>
      <div className={styles.slideshow}>
        <div key={key} className={styles.slide}>
          <div className={styles.slideEnter}>
            <div className={styles.imageWrapper}>
              <img
                src={currentSlide.imgSrc}
                alt={currentSlide.headline}
                className={styles.image}
              />
            </div>

            <h2 className={styles.headline}>
              {currentSlide.headline}
            </h2>

            <p className={styles.paragraph}>
              {currentSlide.paragraph}
            </p>

            <div className={styles.indicators}>
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`${styles.indicator} ${
                    index === currentIndex 
                      ? styles.indicatorActive 
                      : styles.indicatorInactive
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;