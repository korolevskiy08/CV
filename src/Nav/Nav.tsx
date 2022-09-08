import React from 'react';
import style from './Nav.module.css'
import styleContainer from '../common/styles/Container.module.css'


export const Nav = () => {
    return (
        <div className={style.header}>
            <div className={`${styleContainer.container}`}>
                <nav className={style.nav}>
                    <ul className={style.navList}>
                        <li><a href=''>About</a></li>
                        <li><a href=''>Skills</a></li>
                        <li><a href=''>Contacts</a></li>
                        <li><a href=''>My projects</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

