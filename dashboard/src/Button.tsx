import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  backgroundColor?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export function Button({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  icon,
  variant = 'primary',
  fullWidth = false,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`
        ${styles.button} 
        ${styles[size]} 
        ${styles[variant]}
        ${fullWidth ? styles.fullWidth : ''}
      `}
      style={backgroundColor ? { backgroundColor } : undefined}
      onClick={onClick}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {label}
    </button>
  );
}

export default Button;
