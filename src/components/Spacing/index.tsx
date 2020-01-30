import React from 'react';
import cn from 'classnames';
import styles from './spacing.module.scss';
 
export enum MARGINS {
  TINY    = 'tiny',
  SMALL   = 'small',
  MEDIUM  = 'medium',
  LARGE   = 'large',
  BIG     = 'big',
  HUGE    = 'huge'
}

export enum DIRECTION {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical'
}

export interface SpacingProps {
  size: MARGINS,
  direction?: DIRECTION
}


const Spacing:React.FC<SpacingProps> = ({
  size = MARGINS.MEDIUM,
  direction = DIRECTION.HORIZONTAL
}: SpacingProps) => (
  <div className={cn(
      styles.spacing,
      styles[size],
      styles[direction],
    )}
  >
  </div>
)

export default Spacing;
