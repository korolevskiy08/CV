import React from 'react';
import style from "../Nav.module.css";

const navList = [
    {href: '#about', title:'About'},
    {href: '#skills', title: 'Skills'},
    {href: '#project', title: 'Project'},
    {href: '#contacts', title: 'Contacts'},
]

export const NavLink = () => {
    return (
        <div>
            <ul className={style.navList}>
                {navList.map((el, i) => {
                    return (
                        <li className={style.list}><a href={el.href}>{el.title}</a></li>
                    )
                })}
            </ul>
        </div>
    );
};
