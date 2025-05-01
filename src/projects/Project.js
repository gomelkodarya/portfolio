import React from "react";
import style from './Project.module.scss';

export const Project = (props) => {
    return (
        <div className={`${style.project} project`}>
            <div className={style.imageWrapper}>
                <div className={style.image} style={props.style}>
                    <a className={style.btn} href={props.link} target='_blank'>View</a>
                </div>
            </div>
            <div className={style.project_info}>
                <h2 className={style.title}>{props.title}</h2>
                <span className={style.description}>{props.description}</span>
                <a className={style.github} href={props.gitHub} target='_blank'>GitHub</a>
            </div>
        </div>
    )
}