import React from "react";
import profileModule from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={profileModule.imageProfile} src="https://wallpapershome.ru/images/pages/pic_h/6472.jpg"/>
            </div>
            <div className={profileModule.descriptionBlock}>
                <img src={ props.profile.photos.large }/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
