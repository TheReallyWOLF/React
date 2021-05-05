import React from "react";
import profileModule from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={profileModule.imageProfile} src="https://wallpapershome.ru/images/pages/pic_h/6472.jpg"/>
            </div>
            <div className={profileModule.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
