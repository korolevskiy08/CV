import React, {useCallback, useState} from 'react';
import style from './Wokrs.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Work} from "./Work/Work";

export const Woks = () => {
    const [work, setWork] = useState([
        {icons: '', nameButton: 'Смотреть', nameProject: 'Social-network', descriptionProject: 'My app social network'},
        {icons: '', nameButton: 'Смотреть', nameProject: 'Todolist', descriptionProject: 'My app Todolist'},
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
                <h2 className={style.title}>Мои работы</h2>
                <div className={style.works}>
                    {workElement}
                </div>
            </div>
        </div>
    );
};

