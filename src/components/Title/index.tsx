import React from 'react';
import styles from './title.module.scss';
 
export interface TitleProps {
  text: string;
}

const Title:React.FC<TitleProps> = (props:TitleProps) => (
  <div className={styles.title}>{props.text}</div>
)

export default Title;
