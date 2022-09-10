import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";
import faceBookSvg from '../../src/common/socialIcons/facebook-svgrepo-com.svg'
import linkedInSvg from '../../src/common/socialIcons/linkedin-svgrepo-com.svg'
import telegramSvg from '../../src/common/socialIcons/telegram-svgrepo-com.svg'
import instagrmSvg from '../../src/common/socialIcons/instagram-svgrepo-com.svg'

export const Footer = () => {
    return (
        <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.socialContainer}>
                    <h2>All rights reserved © Profile 2022</h2>
                    <ul className={style.social}>
                        <li className={style.socialIcons}>
                            <a href="">
                                <img src={faceBookSvg} alt="facebook"/>
                            </a>
                        </li>
                        <li className={style.socialIcons}>
                            <a href="">
                                <img src={linkedInSvg} alt="linkedIn"/>
                            </a>
                        </li>
                        <li className={style.socialIcons}>
                            <a href="">
                                <img src={telegramSvg} alt="instagram"/>
                            </a>
                        </li>
                        <li className={style.socialIcons}>
                            <a href="">
                                <img src={instagrmSvg} alt="instagram"/>
                            </a>
                        </li>
                    </ul>
                </div>

        </div>
        // </div>
    );
};

