import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  href, 
  type = 'button', 
  className = '', 
  onClick,
  size = 'medium'
}) => {
  const baseStyles = "inline-block bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
  
  const sizeStyles = {
    small: "text-sm px-4 py-2",
    medium: "px-6 py-3",
    large: "text-lg px-8 py-4"
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={combinedClassName} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button type={type} className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;