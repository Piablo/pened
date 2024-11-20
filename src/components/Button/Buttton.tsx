import React, { useState } from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles: React.CSSProperties = {
    padding: '0 2em',
    height: '3em',
    borderRadius: '1.5em 3px 1.5em 1.5em', // Custom border radius
    fontWeight: '600',
    fontSize: '0.875rem',
    outline: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'border-radius 0.3s ease',
    border: 'none',
    boxShadow: '3px 3px 3px rgba(0,0,0, 0.2)'
  };

  const primaryStyles: React.CSSProperties = {
    background: 'linear-gradient(45deg, #35E8FB, #61B32E)', // blue-600
    color: '#FFFFFF', // white
  };

  const secondaryStyles: React.CSSProperties = {
    backgroundColor: '#E5E7EB', // gray-200
    color: '#1F2937', // gray-800
  };

  const hoverStyles: React.CSSProperties = isHovered
    ? {
        borderRadius: '1.5em 3px 1.5em 3px', 
      }
    : {};

  const variantStyles = variant === 'primary' ? primaryStyles : secondaryStyles;

  const combinedStyles = {
    ...baseStyles,
    ...variantStyles,
    ...hoverStyles,
  };

  return (
    <button
      style={combinedStyles}
      className={className}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </button>
  );
};

export default Button;
