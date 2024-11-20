import React from 'react';

interface TextSectionProps {
  heading: string;
  paragraph: string;
}

const styles = {
    wrapper: {
        width: '100%',
        textAlign: 'center',
        maxWidth: '1700px',
        margin: 'auto',
        padding: '8em 1em 1em 1em',
    

    },
    headline:{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#333',
        margin: 0,
        border: 0,
        marginBottom: '1em'
    },
    paragrapgh: {
        fontSize: '1.25rem',
        color: '#555',
        marginBottom: '1.5rem',
    }
}

const TextSection: React.FC<TextSectionProps> = ({ heading, paragraph }) => {
  return (
    <section style={styles.wrapper}>
      <h1 style={styles.headline}>{heading}</h1>
      <p style={styles.paragrapgh}>{paragraph}</p>
    </section>
  );
};

export default TextSection;
