import React from 'react';
import styles from './profilephoto.module.scss';
 
export interface ProfilePhotoProps {
  imgSrc: string;
}

const ProfilePhoto:React.FC<ProfilePhotoProps> = (props:ProfilePhotoProps) => (
  <div className={styles.profilePhoto}>
    <div className={styles.imgWrapper}>
      <img src={props.imgSrc} alt="profile pictures"/>
    </div>
  </div>
)

export default ProfilePhoto;
