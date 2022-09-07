import React from 'react';
import style from './Work.module.css'

export type WorkType = {
    icons: string
    nameButton: string
    nameProject: string
    descriptionProject: string
}

export const Work = ({
                         icons,
                         nameButton,
                         descriptionProject,
                         nameProject

                     }: WorkType) => {
    return (
        <div className={style.workBlock}>
            <div className={style.work}>
                <div className={style.imgWork}>
                    <img src={icons} alt="works"/>
                </div>
                <div className={style.icons}>
                    <button className={style.button}>{nameButton}</button>
                </div>
            </div>
            <div className={style.descriptionWork}>
                <h4>{nameProject}</h4>
                <p>{descriptionProject}</p>
            </div>
        </div>
    );
};

