import React from 'react';
import styles from './navbar.module.scss';
import NavButton from '../NavButton';
import { ReactComponent as CarlsbergLogo } from '../../img/carlsberg-symbol.svg'; 

export interface NavBarProps {

}

const NavBar:React.FC<NavBarProps> = (props:NavBarProps) => (
  <div className={styles.navbar}>
    <div className={styles.logo}>
      <CarlsbergLogo />
    </div>
    <div className={styles.linksWrapper}>
      <NavButton path={'/cadi'} text={'CD'}/>
      <NavButton path={'/skillable'} text={'SK'}/>
    </div>
  </div>
)

export default NavBar;
