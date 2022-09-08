import React from 'react';
import style from './Work.module.css'

export type WorkType = {
    icons: string
    nameButton: string
    nameProject: string
    descriptionProject: string
    linkProject: string | undefined
}

export const Work = ({
                         icons,
                         nameButton,
                         descriptionProject,
                         nameProject,
                         linkProject
                     }: WorkType) => {
    return (
        <div className={style.workBlock}>
            <div className={style.work}>
                <div className={style.imgWork}>
                    <img src={icons} alt="works"/>
                </div>
                <div className={style.icons}>
                    <button className={style.button}>
                        <a href={linkProject}>
                            {nameButton}
                        </a>
                    </button>
                </div>
            </div>
            <div className={style.descriptionWork}>
                <h4>{nameProject}</h4>
                <p>{descriptionProject}</p>
            </div>
        </div>
    );
};

