import React from 'react';
import styles from './menulinks.module.scss';
import MenuLink from '../MenuLink';

export interface MenuLinksProps {

}

const MenuLinks:React.FC<MenuLinksProps> = (props:MenuLinksProps) => (
  <div className={styles.menulinks}>
    <MenuLink path={'/users'}>Users</MenuLink>
    <MenuLink path={'/markets'} active>Markets</MenuLink>
  </div>
)

export default MenuLinks;
