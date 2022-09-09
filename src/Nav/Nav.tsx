import React, {useState} from 'react';
import style from './Nav.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {NavLink} from "./NavLink/NavLink";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";


export const Nav = () => {

    const [on, setOn] = useState(false)

    return (
        <div className={style.header}>
            <div className={`${styleContainer.container}`}>

                <div className={style.burger}>
                        <AccordionTitle setOffHandler={()=>setOn(!on)}/>
                    {on && <NavLink/>}
                </div>

                <nav className={style.nav}>
                    <NavLink />
                </nav>
            </div>
        </div>
    );
};

