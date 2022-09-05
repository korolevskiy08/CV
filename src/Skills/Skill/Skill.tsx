import React from 'react';
import style from './Skill.module.css'
import {SkillType} from "../Skills";

export const Skill = ({
                          imageSkill,
                          titleSkill,
                          directionSkill
                      }: SkillType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <img src={imageSkill}/>
            </div>
            <h3 className={style.titleSkill}>{titleSkill}</h3>
            <span className={style.descriptionSkill}>{directionSkill}</span>
        </div>
    );
};

