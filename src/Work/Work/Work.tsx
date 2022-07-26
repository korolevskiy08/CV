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
        <div className={style.work}>
            <div className={style.icons}>
                <button>{nameButton}</button>
            </div>
            <span>{nameProject}</span>
            <p>{descriptionProject}</p>
        </div>
    );
};

