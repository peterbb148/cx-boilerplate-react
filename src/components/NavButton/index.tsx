import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbutton.module.scss'

export interface NavButtonProps {
  path: string;
  text: string;
}

class NavButton extends React.Component<NavButtonProps> {

  constructor(props:NavButtonProps){
    super(props);
    this.isActive = this.isActive.bind(this);
  }

  isActive() {
    const { path } = this.props;
    return window.location.pathname.startsWith(path) ;
  }

  render() {
    const { path, text } = this.props;
    const classNames = [styles.button];
    if (this.isActive()) {
      classNames.push(styles.active);
    }
    
    return (
      <div className={classNames.join(' ')}>
        <Link to={path}>{text}</Link>
      </div>
    );
  }
}

export default NavButton;