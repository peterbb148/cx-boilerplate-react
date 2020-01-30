import React from 'react';
import styles from './mainmenu.module.scss';
import UserInfo from '../UserInfo';
import MenuLinks from '../MenuLinks';
import Spacing, { MARGINS } from '../Spacing';

export interface MainMenuProps {

}

const MainMenu:React.FC<MainMenuProps> = (props:MainMenuProps) => (
  <div className={styles.mainMenu}>
    <UserInfo />
    <Spacing size={MARGINS.HUGE} />
    <MenuLinks />  
  </div>
)

export default MainMenu;
