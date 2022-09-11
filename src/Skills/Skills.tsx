import React, {useState} from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import reactSvg from '../../src/common/icons/react-svgrepo-com.svg'
import htmlSvg from '../../src/common/icons/html-svgrepo-com.svg'
import cssSvg from '../../src/common/icons/css-svgrepo-com.svg'
import jsSvg from '../../src/common/icons/js-svgrepo-com.svg'
import reduxSvg from '../../src/common/icons/redux-svgrepo-com.svg'
import sassSvg from '../../src/common/icons/sass-svgrepo-com.svg'
import storybookSvg from '../../src/common/icons/storybook-svgrepo-com.svg'
import materialUiSvg from '../../src/common/icons/material-ui-svgrepo-com.svg'
import axiosSvg from '../../src/common/icons/axios-icon.svg'


export type SkillType = {
    imageSkill: any
    titleSkill: string
    directionSkill: string
}

export const Skills = () => {

    let skills = [
        {imageSkill: htmlSvg, titleSkill: 'HTML', directionSkill: 'hypertext markup language for viewing web pages in a browser'},
        {imageSkill: cssSvg, titleSkill: 'CSS', directionSkill: 'A formal language for describing the appearance of a document (web page) written using a markup language'},
        {imageSkill: jsSvg, titleSkill: 'JS', directionSkill: 'Multi-paradigm programming language. Supports object-oriented, imperative and functional styles.'},
        {imageSkill: reactSvg, titleSkill: 'REACT', directionSkill: 'An open source JavaScript library for developing user interfaces.'},
        {imageSkill: reduxSvg, titleSkill: 'REDUX', directionSkill: 'An open source JavaScript library for managing application state.'},
        {imageSkill: axiosSvg, titleSkill: 'AXIOS', directionSkill: 'Promise-based HTTP client for node. js and browser'},
        {imageSkill: sassSvg, titleSkill: 'SASS', directionSkill: 'CSS-based metalanguage designed to increase the abstraction level of CSS code and simplify cascading style sheet files'},
        {imageSkill: storybookSvg, titleSkill: 'STORYBOOK', directionSkill: 'Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.'},
        {imageSkill: materialUiSvg, titleSkill: 'MaterialUI', directionSkill: 'ReactJS\'s framework provides google-ready solutions for fast and fairly simple web development.'}
]


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
        <div className={style.skillsBlock} id={'skills'}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    {skillsElement}
                </div>
            </div>
        </div>
    );
};

