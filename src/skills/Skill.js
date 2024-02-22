import React from "react";
import style from './Skill.module.scss';

export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div style={props.style} className={style.icon}></div>
            <div className={style.skill_info}>
                <h2 className={style.title}>{props.title}</h2>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    )
}