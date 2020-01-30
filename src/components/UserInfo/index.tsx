import React from 'react';
import styles from './userinfo.module.scss';
import ProfilePhoto from '../ProfilePhoto';
import { IMAGES } from '../../demo_content/images';
import Text, { SIZES, ALIGN, TEXTCOLOR } from '../Text';
import Spacing, { MARGINS } from '../Spacing';
import { TEXTLABELS } from '../../demo_content/text';
 
export interface UserInfoProps {
}

const UserInfo:React.FC<UserInfoProps> = (props:UserInfoProps) => (
  <div className={styles.userinfo}>
    <ProfilePhoto imgSrc={IMAGES.profile}/>
    <Spacing size={MARGINS.SMALL} />
    <Text size={SIZES.SMALL} align={ALIGN.CENTER}>{TEXTLABELS.user.name}</Text>
    <Spacing size={MARGINS.TINY} />
    <Text size={SIZES.TINY} align={ALIGN.CENTER} color={TEXTCOLOR.GREY}>{TEXTLABELS.user.job}</Text>
  </div>
)

export default UserInfo;
