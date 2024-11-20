import React from "react";
import ReactMarkdown from "react-markdown";

interface CardProps {
  imageSrc: string;
  headline: string;
  paragraph: string; // Now accepts Markdown syntax
}

const ReadmoreCardGrid: React.FC = () => {
  const cards: CardProps[] = [
    {
      imageSrc: "/ourProduct/gamified-learning.png",
      headline: "Interactive Video Lessons",
      paragraph: `
**Purpose:** Each lesson is broken down into precise, fine-grain learning objectives.  

**How It Works:** These objectives are taught to the student using interactive videos.  

Throughout the lesson, students actively participate, ensuring they engage with the content.`,
    },
    {
      imageSrc: "/ourProduct/memory1.png",
      headline: "Memory Techniques",
      paragraph: `
**Purpose:** After each interactive video, the system evaluates the student's understanding.

**How It Works:** Responses from the student are recorded, and their response times are tracked. A faster response indicates rote recall, while slower responses suggest more mental processing. This data helps estimate the student’s understanding and how quickly they are likely to recall the information in the future. 

Throughout the lesson, students actively participate, ensuring they engage with the content.`,
    },
    {
      imageSrc: "/ourProduct/space.png",
      headline: "Space Repetition",
      paragraph: `
**Purpose:** Ensure the student truly understands every key point before progressing.

**How It Works:** The interactive video is only considered complete when the student has demonstrated comprehension of every individual learning objective in the video.`,
    },
    {
      imageSrc: "/ourProduct/gamified1.png",
      headline: "Gamified Learning",
      paragraph: `
**Purpose:** After each interactive video, the system evaluates the student's understanding.

**How It Works:** Responses from the student are recorded, and their response times are tracked. A faster response indicates rote recall, while slower responses suggest more mental processing. This data helps estimate the student’s understanding and how quickly they are likely to recall the information in the future.  

Throughout the lesson, students actively participate, ensuring they engage with the content.`,
    },
  ];

  const styles = {
    headline: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#333",
      margin: 0,
      border: 0,
      marginBottom: "1em",
      textAlign: "center",
    },
  };

  return (
    <div style={{ padding: "8em 1em 1em 1em" }}>
      <h1 style={styles.headline}>How it WORKS!</h1>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img
              src={card.imageSrc}
              alt={card.headline}
              className="card-image"
            />
            <h3 className="card-headline">{card.headline}</h3>
            <div className="card-paragraph-container">
              <ReactMarkdown className="card-paragraph">
                {card.paragraph}
              </ReactMarkdown>
            </div>
            <button className="read-more-button">Read More</button>
          </div>
        ))}
        <style jsx>{`
          .card-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 2em;
            max-width: 1700px;
            margin: auto;
          }
          @media (min-width: 640px) {
            .card-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .card-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          .card {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1em;
            border-radius: 1em;
            background: linear-gradient(
              45deg,
              rgba(136, 252, 252, 0.2) 0%,
              rgba(8, 183, 221, 0.5) 100%
            );
            transition: transform 0.3s ease;
            backdrop-filter: blur(10px);
          }

          .card-image {
            width: 80%;
            margin: auto;
          }

          .card-headline {
            font-size: 1.2em;
            margin: 15px 0;
          }

          .card-paragraph-container {
            position: relative;
            height: 80px; /* Set height for the paragraph area */
            overflow: hidden;
            width: 100%;
            padding: 10px;
          }

          .card-paragraph {
            margin: 0;
          }

          .read-more-button {
            margin: 10px;
            padding: 10px 15px;
            background-color: #0070f3;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .read-more-button:hover {
            background-color: #005bb5;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ReadmoreCardGrid;
