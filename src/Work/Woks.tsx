import React, {useCallback, useState} from 'react';
import style from './Wokrs.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Work} from "./Work/Work";
import socialNetworkImg from '../../src/common/istockphoto-1190654842-612x612.jpg'
import todolistImg from '../../src/common/original.jpg'

export const Woks = () => {
    const [work, setWork] = useState([
        {icons: socialNetworkImg, nameButton: 'Watch', nameProject: 'Social-network', descriptionProject: 'My app social network'},
        {icons: todolistImg, nameButton: 'Watch', nameProject: 'Todolist', descriptionProject: 'My app Todolist'},
    ])

    const workElement = work.map((el, i) => {
        return (
            <Work key={i}
                  icons={el.icons}
                  nameButton={el.nameButton}
                  nameProject={el.nameProject}
                  descriptionProject={el.descriptionProject}
            />
        )
    })

    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>PORTFOLIO</h2>
                <div className={style.works}>
                    {workElement}
                </div>
            </div>
        </div>
    );
};

