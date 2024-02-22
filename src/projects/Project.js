import React from "react";
import style from './Project.module.scss';

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <a className={style.btn} href={'#'}>View</a>
            </div>
            <div className={style.project_info}>
                <h2 className={style.title}>{props.title}</h2>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    )
}