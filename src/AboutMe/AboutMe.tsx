import React from 'react';
import style from './AboutMe.module.css'
import avatar from '../common/avatar.jpg'
import styleContainer from "../common/styles/Container.module.css";

export const AboutMe = () => {
    return (
        <div className={style.aboutMeBlock} id={'about'}>
            <div className={`${styleContainer.container} ${style.aboutContainer}`}>
                <h2 className={style.aboutMe}>About me</h2>
                <div className={style.description}>
                    <div>
                        <img className={style.avatar} src={avatar} alt="avatar"/>
                    </div>
                    <div className={style.aboutMeInfo}>
                        <h2 className={style.name}>Karaleuski Yauheni</h2>
                        <h2>Front-end developer</h2>
                        <p className={style.aboutMeText}>
                            I'm a front-end developer with half a year experience in the field. All my projects and skills can be seen below
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
