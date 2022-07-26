import React, {useState} from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";


export type SkillType = {
    imageSkill: string
    titleSkill: string
    directionSkill: string
}

export const Skills = () => {

    const [skills, setSkils] = useState<Array<SkillType>>([
        {imageSkill: '', titleSkill: 'REACT', directionSkill: 'afk[kas[kfg[askg[kfak[fa[fapfasdf asfasdgarg'},
        {imageSkill: '', titleSkill: 'REDUX', directionSkill: 'asd adjfghsdilk;hgfl;asdfghjakl;ds'},
        {imageSkill: '', titleSkill: 'HTML', directionSkill: 'asd asfksdl;gkjsdl;'},
        {imageSkill: '', titleSkill: 'CSS', directionSkill: 'asd asdg,lsd;'},
    ])

    const skillsElement = skills.map((el: any, i) => {
        return (
            <Skill key={i}
                   imageSkill={el.imageSkill}
                   directionSkill={el.directionSkill}
                   titleSkill={el.titleSkill}
            />
        )
    })

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    {skillsElement}
                </div>
            </div>
        </div>
    );
};

