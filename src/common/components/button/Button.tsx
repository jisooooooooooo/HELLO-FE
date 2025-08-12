import React from 'react';
import type { MouseEventHandler } from 'react';

import * as styles from './Button.css.ts';

interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  label,
  icon,
  variant = 'primary',
  disabled = false,
  onClick,
  type = 'button',
}: ButtonProps) => {
  const buttonClass = variant === 'secondary' ? styles.secondaryButton : styles.primaryButton;

  const renderIcon = () => {
    if (!icon) {
      return null;
    }
    if (React.isValidElement(icon)) {
      const el = icon as React.ReactElement<{ className?: string }>;
      return React.cloneElement(el, {
        className: [styles.iconWrapper, el.props.className].filter(Boolean).join(' '),
      });
    }
    return icon;
  };

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {renderIcon()}
      {label}
    </button>
  );
};

export default Button;
