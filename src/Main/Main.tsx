import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Header} from "../Header/Header";

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <Header/>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span className={style.welcome}>Welcome my site</span>
                    <h1>I am Karaleuski Yauheni</h1>
                    <p className={style.welcome}>Front end developer</p>
                </div>
                <div className={style.aboutMeBlock}>
                    <a className={style.btn} href="">more about me</a>
                </div>
            </div>
        </div>
    );
};

