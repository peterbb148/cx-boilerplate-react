import React from 'react';
import cn from 'classnames';
import styles from './text.module.scss';
 
export enum SIZES {
  TINY    = 'tiny',
  SMALL   = 'small',
  MEDIUM  = 'medium',
  LARGE   = 'large',
  BIG     = 'big',
  HUGE    = 'huge'
}

export enum TEXTCOLOR {
  DARK_GREY = 'darkgrey',
  GREY_MID = 'greymid',
  GREY = 'grey',
  WHITE = 'white',
  PRIMARY = 'primary'
}

export enum ALIGN {
  LEFT    = 'alignLeft',
  RIGHT   = 'alignRight',
  CENTER  = 'alignCenter',
}

export interface TextProps {
  size?: SIZES;
  align?: ALIGN;
  bold?: boolean;
  color?: TEXTCOLOR;
  children: string;
}

const Text:React.FC<TextProps> = ({
  children,
  size = SIZES.MEDIUM,
  align = ALIGN.LEFT,
  color = TEXTCOLOR.DARK_GREY,
  bold = false
}:TextProps) => (
  <div className={cn(
      styles.text,
      styles[size],
      styles[align],
      styles[color],
      { [styles.bold] : bold}
    )}
  >
    { children }
  </div>
)

export default Text;
