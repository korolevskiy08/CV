import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>Karaleuski Yauheni</h2>
                <div className={style.social}>
                    <a href="">FaceBook</a>
                    <a href="">LinkedIn</a>
                    <a href="">Telegram</a>
                    <a href="">Instagram</a>
                </div>
                <h2>(с)Все права защищены</h2>
            </div>
        </div>
    );
};

