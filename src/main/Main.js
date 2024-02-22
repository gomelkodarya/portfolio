import React from "react";
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <h1>I'm Darya Gomelko</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.color_block}></div>
                <div className={style.photo}></div>
            </div>

        </div>
    )
}