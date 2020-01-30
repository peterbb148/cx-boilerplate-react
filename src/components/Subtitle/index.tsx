import React from 'react';
import styles from './subtitle.module.scss';
 
export interface SubtitleProps {
  text: string;
}

const Subtitle:React.FC<SubtitleProps> = (props:SubtitleProps) => (
  <div className={styles.subtitle}>{props.text}</div>
)

export default Subtitle;
