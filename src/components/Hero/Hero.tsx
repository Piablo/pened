// components/Hero/Hero.js

import React from 'react';
import styles from './Hero.module.css';
import Button from '../Button/Buttton';
import Slideshow from '../SlideshowCard/Slideshow';

const Hero = () => {

  function onClick(){
    debugger
  }

  const slides = [
    {
      imgSrc: "ourProduct/video.png",
      headline: "Dynamic Interactive Videos",
      paragraph: "Engage with every lesson like never before—interactive videos that make learning active and exciting!",
      lifeSpan: "5s",
    },
    {
      imgSrc: "ourProduct/smarter.png",
      headline: "Measure, Master, and Excel",
      paragraph: "Get smarter, faster—our system measures your skills and helps you master every detail.",
      lifeSpan: "5s",
    },
    {
      imgSrc: "ourProduct/gamified-learning.png",
      headline: "Prove Your Knowledge to Advance",
      paragraph: "Prove your mastery—move forward only when you’ve nailed every key concept.",
      lifeSpan: "5s",
    },

    {
      imgSrc: "ourProduct/spaced-repetition.png",
      headline: "Smarter Reviews with Spaced Repetition",
      paragraph: "Learn smarter, not harder—retain knowledge with precision-timed reviews.",
      lifeSpan: "5s",
    },
    {
      imgSrc: "ourProduct/memory.png",
      headline: "Boost Memory with Proven Techniques.",
      paragraph: "Unlock the power of your memory—turn knowledge into lasting confidence.",
      lifeSpan: "5s",
    },
    {
      imgSrc: "ourProduct/ace.png",
      headline: "Real-World Exam Practice",
      paragraph: "Ace your exams—practice with real questions and proven strategies.",
      lifeSpan: "5s",
    },
    {
      imgSrc: "ourProduct/progress.png",
      headline: "Your Personalized Progress Tracker",
      paragraph: "Track your success—see your growth and plan your path to top scores.",
      lifeSpan: "5s",
    },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>EDUCATION</h1>
          <h1 className={styles.title}>At your fingertips</h1>
          <div style={{height: '2em'}}></div>
          <p className={styles.subheadline}>
            A Revolutionary Gamified Learning Management System. Expert-curated content powered by AI, delivering personalized, world-class education at a fraction of the cost.
          </p>
          <div style={{height: '1em'}}></div>
          <Button label='Start Your Free Trial!' onClick={onClick}/>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <Slideshow slides={slides}/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
