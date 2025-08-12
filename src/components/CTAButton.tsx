import React from 'react';

interface CTAButtonProps {
  text: string;
  secondary?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

export const CTAButton = ({
  text,
  secondary = false,
  fullWidth = false,
  onClick
}: CTAButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${secondary
          ? 'bg-secondary-400 text-primary-500  border-primary-400 hover:bg-secondary-600'
          : 'bg-primary-500 text-white  hover:bg-secondary-500'
        }
        ${fullWidth ? 'w-full' : ''}
        py-2 px-4 rounded transition-colors duration-200 font-medium
      `}
    >
      {text}
    </button>
  );
};
