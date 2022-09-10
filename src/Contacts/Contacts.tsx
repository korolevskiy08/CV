import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";
import telegramSvg from '../../src/common/socialIcons/telegram-svgrepo-com.svg'


export const Contacts = () => {
    return (
        <div className={style.contactsBlock} id={'contacts'}>
                <div className={`${styleContainer.container} ${style.contactsContainer} `}>
                    <h2 className={style.title}>Contacts</h2>
                    <div>
                        <h4>Location: Minsk, Belarus</h4>
                        <h4>
                            email: emkorolev@gmail.com
                        </h4>
                        <h4>
                            phone number: +375295666091
                        </h4>
                        <h4>
                            telegram: @korolevEv
                        </h4>
                    </div>
                    <form className={style.form}>
                        <input type="text" placeholder={'Full Name'}/>
                        <input type="text" placeholder={'Phone Number'}/>
                        <textarea/>
                    </form>
                    <button className={style.sendMessage}>Send Message</button>
                </div>
        </div>
    );
};

