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
            <div className={style.icon}>{imageSkill}</div>
            <h3>{titleSkill}</h3>
            <span>{directionSkill}</span>
        </div>
    );
};

