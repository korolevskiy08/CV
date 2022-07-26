import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer} `}>
                <h2 className={style.title}>Контакты</h2>
                <form className={style.form}>
                    <input type="text" placeholder={'Full Name'}/>
                    <input type="text" placeholder={'Phone Number'}/>
                    <textarea/>

                </form>
                <button>Отправить</button>
            </div>
        </div>
    );
};

