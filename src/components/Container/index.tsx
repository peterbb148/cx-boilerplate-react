import React from 'react';
import cn from 'classnames';
import styles from './container.module.scss';
 

export interface ContainerProps {
  children: any;
  padding?: string;
  direction?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
}

export enum PADDING {
  NONE = 'none',
  SMALL = 'small',
  MEDIUM = 'medium'
}

export enum DIRECTION {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical'
}

const Container:React.FC<ContainerProps> = ({
  children, 
  padding = PADDING.MEDIUM, 
  direction = DIRECTION.HORIZONTAL,
  fullWidth = false,
  fullHeight = false
}:ContainerProps) => (
  <div className={cn(
    styles.container, 
    styles[padding], 
    styles[direction],
    { 
      [styles.fullWidth]: fullWidth,
      [styles.fullHeight]: fullHeight
    }
  )}>
    { children }
  </div>
)

export default Container;
