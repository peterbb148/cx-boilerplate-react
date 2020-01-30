import React from 'react';
import cn from 'classnames';
import styles from './card.module.scss';

export enum HEIGHT_RULES {
  SMALL = 'heightSmall',
  MEDIUM = 'heightMedium',
  LARGE = 'heightLarge',
  CONTENT = 'heightContent',
  FULL = 'heightFull'
}

export enum WIDTH_RULES {
  SMALL = 'widthSmall',
  MEDIUM = 'widthMedium',
  LARGE = 'widthLarge',
  CONTENT = 'widthContent',
  FULL = 'widthFull'
}

export interface CardProps {
  children: any;
  height?: HEIGHT_RULES;
  width?: WIDTH_RULES;
}

const Card:React.FC<CardProps> = ({
  children,
  height = HEIGHT_RULES.CONTENT,
  width = WIDTH_RULES.CONTENT
}:CardProps) => (
  <div className={cn(
    styles.card,
    styles[height],
    styles[width]
  )}>
    { children }
  </div>
);

export default Card;
