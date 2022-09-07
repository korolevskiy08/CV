import React, {useEffect, useState} from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Header} from "../Header/Header"

export const Main = () => {

    const [text, setText] = useState('')
    const [index, setIndex] = useState(0)
    const [i, setI] = useState(1)
    const title = 'Front-end developer'


    useEffect(() => {
        // if(title.length>0){
        //     setTimeout(()=>{
        //         setText((a)=>a+title[index])
        //         setIndex(index+1)
        //         // title.slice(0)
        //     }, 1000)
        // }

        const timer = setInterval(() => {
            const currentText = title.slice(0, i) // 1
            setText(currentText) // 3
            setI(i + 1)
            if(i > title.length) return
        }, 500)
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
                    <p className={style.welcome}>{text}</p>
                </div>
                <div className={style.aboutMeBlock}>
                    <a className={style.btn} href="">more about me</a>
                </div>
            </div>
        </div>
    );
};

