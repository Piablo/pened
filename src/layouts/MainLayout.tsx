// layouts/MainLayout.js

import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import ResponsiveBackground from '@/components/ResponsiveBackground/ResponsiveBackground';
import BackgroundImage from '@/components/BackgroundImage/BackgroundImage';
import CardGrid from '@/components/CardGrid/CardGrid';
import TextSection from '@/components/TextSection';
import ReadmoreCardGrid from '@/components/ReadmoreCardGrid/ReadmoreCardGrid';
import ContactForm from '@/components/ContactForm/ContactForm';
import AboutUs from '@/components/AboutUs/AboutUs';
import Footer from '@/components/Footer/Footer';

type CardProps = {
  title: string;
  grade: string;
  description: string;
  imageSrc: string;
  originalPrice: number;
  discountPercentage: number;
};


const MainLayout = ({ children }) => {

  const slides = [
    {
      imgSrc: "ourProduct/spaced-repetition.png",
      headline: "Interactive Video Lessons",
      paragraph: "Engage with every lesson like never before—interactive videos that make learning active and exciting!",
      lifeSpan: "5s",
    },
    {
      imgSrc: "ourProduct/gamified-learning.png",
      headline: "Gamified Learning",
      paragraph: "A paragraph explaining how gamification enhances learning.",
      lifeSpan: "4s",
    },
  ];

  const aboutUs = {
    headline: "Meet the Team",
    cards: [
      {
        paragraph: `
**Paul Buys - Chief Visionary Officer / Lead Educational Architect**
   - **Role Focus**: Driving the long-term vision of the company, specifically focusing on educational strategies, partnerships, and the seamless integration of memory techniques into learning systems.
   - **Responsibilities**:
     - Setting the overall direction and philosophy of the system.
     - Building and maintaining relationships with partner schools and high school students.
     - Ensuring the pedagogical architecture aligns with educational goals.`,
        mainImage: "/aboutUs/paul/avatar.png",
        thumbnailImage: "/aboutUs/paul/profile.png",
        name: "Paul Buys",
        description: "Visionary Officer",
      },
      {
        paragraph:  `
**Shelley Gilmore - Chief Project Manager / Creative Director**
   - **Role Focus**: Overseeing day-to-day operations and ensuring project timelines, content accuracy, and team collaboration.
   - **Responsibilities**:
     - Managing the team and ensuring smooth project execution.
     - Overseeing visual and creative aspects of the system to ensure they are impactful and aligned with mnemonics principles.
     - Collaborating with Paul on content delivery in schools.`,
        mainImage: "/aboutUs/shelley/avatar.png",
        thumbnailImage: "/aboutUs/shelley/profile.png",
        name: "Shelley Gilmore",
        description: "Project Manager",
      },




//       {
//         paragraph: `
// **Keagan Gilmore - Managing Director / Chief Technology Officer**
//    - **Role Focus**: Leading the technical team and strategic implementation of new features.
//    - **Responsibilities**:
//      - Defining technical strategies to align with business goals.
//      - Ensuring the technical team delivers innovative and efficient solutions.
//      - Collaborating with Paul to ensure the system integrates effectively with educational frameworks.`,
//         mainImage: "/aboutUs/keagan/avatar.png",
//         thumbnailImage: "/aboutUs/keagan/profile.png",
//         name: "Keagan Gilmore",
//         description: "Managing Director",
//       },
//       {
//         paragraph: `
// **Dane Jessen - Chief DevOps Engineer / Lead Software Engineer**
//    - **Role Focus**: Ensuring system stability, scalability, and seamless software deployment.
//    - **Responsibilities**:
//      - Leading all DevOps efforts, including infrastructure management, CI/CD pipelines, and system monitoring.
//      - Managing and maintaining client-side and API software.
//      - Overseeing data security and reliability.`,
//         mainImage: "/aboutUs/dane/avatar.png",
//         thumbnailImage: "/aboutUs/dane/profile.png",
//         name: "Dane Jessen",
//         description: "Chief DevOps Engineer",
//       },
    ],
  }
  

  const cards = [
    {
      title: "Maths",
      grade: "Grade 8",
      description: "Description of the Maths course",
      imageSrc: '/maths.png',
      originalPrice: 250,
      discountPercentage: 50,
      background1: "#E1F6F7",
      background2: "#ACFCD9"
    },
    {
      title: "Robotics",
      grade: "Grade 8",
      description: "Description of the Maths course",
      imageSrc: '/robotics.png',
      originalPrice: 250,
      discountPercentage: 50,
      background1: "#E7B7C7",
      background2: "#EB8AAA",
      
    },
    {
      title: "Science",
      grade: "Grade 8",
      description: "Description of the Maths course",
      imageSrc: '/science.png',
      originalPrice: 250,
      discountPercentage: 50,
      background1: "#FFD27A",
      background2: "#FB703E"
    },
    {
      title: "Luv 2D",
      grade: "Grade 8",
      description: "Description of the Maths course",
      imageSrc: '/love2d.png',
      originalPrice: 250,
      discountPercentage: 50,
      background1: "#FDB7FF",
      background2: "#E850B7"
    }
  ]


  return (
    <div style={{position: 'relative'}}>
      <BackgroundImage/>
      <ResponsiveBackground />
      <Navbar />
      <Hero />
      {/* <TrustIndicators />
      <TrustIndicators /> */}

      <CardGrid sectionHeadline="Trending Courses"cards={cards}/>
      <TextSection
        heading="Our Ethos"
        paragraph={`
LX Library stands as a beacon of innovation in all levels online education, seamlessly blending a diverse range of memory techniques with interactive learning methodologies to redefine the educational landscape. Our core ethos revolves around fostering a deep love for learning, achieved through engaging content and strategic revision practices. We provide students with a dynamic platform where they can immerse themselves in interactive tools and resources, optimizing their engagement and content absorption. Through the integration of mnemonic devices, spaced repetition, and other cognitive strategies, LX Library equips learners with the tools they need to excel academically while cultivating a lifelong passion for knowledge acquisition. Our commitment to accessibility ensures that learners from all backgrounds have access to our high-quality educational resources, empowering them to unlock their full potential. Join us at LX Library and embark on a journey to "learn to love to learn" as we continue to push the boundaries of online education.`}
      />
      <ReadmoreCardGrid/>
      <ContactForm/>
      <AboutUs headline={aboutUs.headline} cards={aboutUs.cards}/>
      {/* <Slideshow slides={slides}/> */}
      {/* <TrustIndicators /> */}
      <Footer/>
    </div>
  );
};

export default MainLayout;



