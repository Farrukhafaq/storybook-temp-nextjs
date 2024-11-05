'use client';

import { FC, ReactNode } from 'react';
import styles from './style.module.css';

export interface IButton {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'btnPrimary' | 'btn-yellow' | 'white';
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: FC<IButton> = (props) => {
  const { type, children, variant, onClick } = props;
  return (
    <button
      type={type}
      className={styles.btn + ' ' + styles.btnPrimary}
      variant={variant}
      onClick={onClick || undefined}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
