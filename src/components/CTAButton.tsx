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
  return <button onClick={onClick} className={`
        ${secondary ? 'bg-white text-primary-800 border border-primary-400 hover:bg-primary-50' : 'bg-primary-500 text-white hover:bg-primary-700'}
        ${fullWidth ? 'w-full' : ''}
        py-2 px-4 rounded transition-colors duration-200 font-medium
      `}>
    {text}
  </button>;
};