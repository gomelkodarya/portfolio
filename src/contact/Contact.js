import React from "react";
import style from './Contact.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from "../common/components/title/Title";

export const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <Title text={'Contact'}/>
                <form className={style.form} action={'#'} method={'POST'} name={'feedback'}>
                    <input type={'text'} name={'name'} placeholder={'Ваше имя'}/>
                    <input type={'text'} name={'email'} placeholder={'Ваш email'}/>
                    <textarea name={'message'} placeholder={'Введите сообщение'}/>
                </form>
                <button className={style.btn} type={'submit'}>Send</button>
            </div>
        </div>
    )
}