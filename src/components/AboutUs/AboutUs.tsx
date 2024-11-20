import React from "react";
import ReactMarkdown from 'react-markdown'
import styles from './AboutUs.module.css';

interface CardData {
  paragraph: string;
  mainImage: string;
  thumbnailImage: string;
  name: string;
  description: string;
}

interface FourCardComponentProps {
  headline: string;
  cards: CardData[];
}

const AboutUs: React.FC<FourCardComponentProps> = ({ headline, cards }) => {

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", maxWidth: "1700px", margin: 'auto' }}>
      <h1 style={{ fontWeight: 'bold', textAlign: "center", marginBottom: "3rem", fontSize: '3rem', color: '#363636'}}>{headline}</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ padding: "1rem" }}>
            <ReactMarkdown>{card.paragraph}</ReactMarkdown>
            </div>
            <div style={{ position: "relative" }}>
              <img
                src={card.mainImage}
                alt="Main"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderRadius: "4px",
                  padding: "4px",
                }}
              >
                <img
                  src={card.thumbnailImage}
                  alt="Thumbnail"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    marginRight: "8px",
                  }}
                />
                <div>
                  <p style={{ fontSize: "0.9rem", fontWeight: "bold", margin: 0 }}>
                    {card.name}
                  </p>
                  <p style={{ fontSize: "0.8rem", margin: 0 }}>{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
