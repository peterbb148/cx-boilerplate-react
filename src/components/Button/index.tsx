import React from 'react';
import cn from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps {
  children: string;
  onClick: (event: any) => void;
  icon?: any;
  secondary?: boolean;
  right?: boolean;
  bottom?: boolean;
  fullWidth?: boolean;
}

const Button:React.FC<ButtonProps> = ({
  children,
  onClick,
  secondary = false, 
  right = false,
  bottom = false,
  fullWidth = false,
  icon
}:ButtonProps) => (
  <div className={cn(
    styles.button, 
    {
      [styles.secondary]: secondary,
      [styles.right]: right,
      [styles.bottom]: bottom,
      [styles.fullWidth]: fullWidth
    }
  )} onClick={onClick}>
    <div className={styles.text}>{ children }</div> 
    { icon && <div className={styles.icon}>{ icon }</div> }
  </div>
)

export default Button;
