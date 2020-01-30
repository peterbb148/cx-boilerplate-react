import React from 'react';
import cn from 'classnames';
import styles from './menulink.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as LibraryIcon } from '../../img/library-1.svg';
import Spacing, { DIRECTION, MARGINS } from '../Spacing';

export interface MenuLinkProps {
  children: string;
  path: string;
  active?: boolean;
}

const MenuLink:React.FC<MenuLinkProps> = ({
  children,
  path,
  active = false
}:MenuLinkProps) => (
  <Link to={ path }>
    <div className={cn(styles.menulink, {[styles.active]: active})}>
      <LibraryIcon />
      <Spacing direction={DIRECTION.VERTICAL} size={MARGINS.MEDIUM} />
      { children }
    </div>
  </Link>
)

export default MenuLink;
