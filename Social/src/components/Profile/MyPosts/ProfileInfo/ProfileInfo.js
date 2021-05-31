import React from "react";
import profileModule from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

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
                <ProfileStatus status={"WOLF WOLF WOLF"}/>
                <span> { props.profile.fullName }</span>
                <span> { props.profile.userId }</span>
            </div>
        </div>
    )
}

export default ProfileInfo;
