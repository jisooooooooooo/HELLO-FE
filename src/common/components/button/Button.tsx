import type { MouseEventHandler } from 'react';

import * as styles from './Button.css.ts';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  label,
  variant = 'primary',
  disabled = false,
  onClick,
  type = 'button',
}: ButtonProps) => {
  const buttonClass = variant === 'secondary' ? styles.secondaryButton : styles.primaryButton;
  return (
    <button
      className={buttonClass}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
