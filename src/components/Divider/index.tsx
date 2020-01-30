import React from 'react';
import styles from './divider.module.scss';
 

export interface DividerProps {
}

const Divider:React.FC<DividerProps> = (props:DividerProps) => (
  <div className={styles.divider}></div>
)

export default Divider;
