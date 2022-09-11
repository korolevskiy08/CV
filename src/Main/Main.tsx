import React, {useEffect, useState} from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Header} from "../Header/Header"

export const Main = () => {

    const [text, setText] = useState('')
    const [i, setI] = useState(1)
    const title = 'Front-end developer'


    useEffect(() => {
        const timer = setInterval(() => {
            const currentText = title.slice(0, i) // 1
            setText(currentText) // 3
            setI(i + 1)
            if(i > title.length) return
            if(i === title.length){
                setI(1)
            }
        }, 200)
        return () => {
            clearInterval(timer)
        }

    })


    return (
        <div className={style.mainBlock}>
            <Header/>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span className={style.welcome}>Welcome to my site</span>
                    <h1>I am Karaleuski Yauheni</h1>
                    <p className={style.textSkills}>{text}</p>
                </div>
                <div className={style.aboutMeBlock}>
                    <a className={style.btn} href={'#about'}>more about me</a>
                </div>
            </div>
        </div>
    );
};

